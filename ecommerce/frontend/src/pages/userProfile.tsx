import { useEffect, useReducer } from "react";
import "../views/profile.css";
import api from "../api/axiosInstance";

interface UserProfile {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_no: string;
  dp_url?: string;
}

interface State {
  loading: boolean;
  error: string | null;
  user: UserProfile | null;
}

type Action =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: UserProfile }
  | { type: "FETCH_ERROR"; payload: string };

const initialState: State = {
  loading: true,
  error: null,
  user: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, user: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function Profile() {
  const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
    const fetchUserProfile = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const token = localStorage.getItem("token");
        const response = await api.get("/users/profile", {
          headers: { Authorization: token },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: response.data.userDetails });
      } catch (error: any) {
        dispatch({ type: "FETCH_ERROR", payload: "Failed to fetch user data" });
      }
    };
    fetchUserProfile();
  }, []);

  if (state.loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="alert alert-danger text-center mt-4">
        {state.error}
      </div>
    );
  }

  const user = state.user; 

  return (
    <div className="container py-4 profile-page">
      <div className="row">
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <img
                src={user?.dp_url ? `http://localhost:4000${user.dp_url}` : "https://dummyimage.com/120x120/cccccc/000000.png&text=Profile"}
                alt="Profile"
                className="rounded-circle mb-2"
                width="80"
                height="80"
              />
              <h6 className="fw-bold">{user?.first_name} {user?.last_name}</h6>
              <p className="text-muted mb-0">Hello, {user?.first_name}</p>
            </div>
          </div>

          <ul className="list-group mt-3">
            <li className="list-group-item fw-semibold bg-light">My Orders</li>
            <li className="list-group-item fw-semibold bg-light">Account Settings</li>
            <ul className="list-group list-group-flush ms-3">
              <li className="list-group-item active">Profile Information</li>
              <li className="list-group-item">Manage Addresses</li>
            </ul>

            <li className="list-group-item fw-semibold bg-light">Payments</li>
            <ul className="list-group list-group-flush ms-3">
              <li className="list-group-item">Gift Cards</li>
              <li className="list-group-item">Saved UPI</li>
              <li className="list-group-item">Saved Cards</li>
            </ul>

            <li className="list-group-item text-danger fw-semibold">Logout</li>
          </ul>
        </div>

        <div className="col-md-9">
          <div className="card shadow-sm p-4">
            <h5 className="mb-4">Personal Information</h5>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={user?.first_name || ""}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={user?.last_name || ""}
                  disabled
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                className="form-control"
                value={user?.email || ""}
                disabled
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                value={user?.phone_no || ""}
                disabled
              />
            </div>
            <div className="d-flex gap-3 mt-4">
              <button className="btn btn-outline-danger">Deactivate Account</button>
              <button className="btn btn-danger">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
