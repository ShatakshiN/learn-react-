
import { useEffect, useReducer, useState } from "react";
import "../views/profile.css";
import api from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";


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
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState<Partial<UserProfile & { password?: string }>>({});
  const [saving, setSaving] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Fetch user data
  useEffect(() => {
    const fetchUserProfile = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const token = localStorage.getItem("token");
        const response = await api.get("/users/profile", {
          headers: { Authorization: token },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: response.data.data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: "Failed to fetch user data" });
      }
    };
    fetchUserProfile();
  }, []);

  const user = state.user;
  const navigate = useNavigate();

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedData({
      email: user?.email,
      phone_no: user?.phone_no,
      dp_url: user?.dp_url,
      password: "",
    });
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedData({});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleSaveClick = async () => {
    try {
      setSaving(true);
      const token = localStorage.getItem("token");

      // Don’t send password if empty
      const payload = { ...editedData };
      if (!payload.password) delete payload.password;

      await api.put("/users/profile/edit", payload, {
        headers: { Authorization: token },
      });

      alert("User details edited successfully. You will be redirected to login.");

      // Clear token so user needs to login again
      localStorage.removeItem("token");


      /* // Refresh user info
      const response = await api.get("/users/profile", {
        headers: { Authorization: token },
      });
      dispatch({ type: "FETCH_SUCCESS", payload: response.data.data });

      setIsEditing(false); */
      navigate("/login", { replace: true });
    } catch (error) {
      alert("Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  if (state.loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="alert alert-danger text-center mt-4">{state.error}</div>
    );
  }

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");
      await api.delete("users/profile/delete", {
        headers: { Authorization: token },
      });

      alert("Your account has been deleted. You will be redirected to the login page.");

    
      localStorage.removeItem("token");

      navigate("/login", { replace: true });
    } catch (error) {
      console.error(error);
      alert("Failed to delete account. Please try again.");
    }
  };


  return (
    <div className="container py-4 profile-page">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <img
                src={
                  user?.dp_url
                    ? `http://localhost:4000${user.dp_url}`
                    : "https://dummyimage.com/120x120/cccccc/000000.png&text=Profile"
                }
                alt="Profile"
                className="rounded-circle mb-2"
                width="80"
                height="80"
              />
              <h6 className="fw-bold">
                {user?.first_name} {user?.last_name}
              </h6>
              <p className="text-muted mb-0">Hello, {user?.first_name}</p>
            </div>
          </div>

          <ul className="list-group mt-3">
            <li className="list-group-item fw-semibold bg-light">
              My Orders
            </li>
            <li className="list-group-item fw-semibold bg-light">
              Account Settings
            </li>
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

            <li className="list-group-item text-danger fw-semibold">
              Logout
            </li>
          </ul>
        </div>

        {/* Profile Edit Section */}
        <div className="col-md-9">
          <div className="card shadow-sm p-4">
            <h5 className="mb-4">Personal Information</h5>

            {/* Names */}
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

            {/* Editable Fields */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                className={`form-control ${isEditing ? "border-warning shadow-sm" : ""}`}
                value={isEditing ? editedData.email || "" : user?.email || ""}
                disabled={!isEditing}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Mobile Number</label>
              <input
                type="text"
                name="phone_no"
                className={`form-control ${isEditing ? "border-warning shadow-sm" : ""}`}
                value={isEditing ? editedData.phone_no || "" : user?.phone_no || ""}
                disabled={!isEditing}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Profile Picture URL</label>
              <input
                type="text"
                name="dp_url"
                className={`form-control ${isEditing ? "border-warning shadow-sm" : ""}`}
                value={isEditing ? editedData.dp_url || "" : user?.dp_url || ""}
                disabled={!isEditing}
                onChange={handleInputChange}
              />
            </div>

            {/* Password Field (only in edit mode) */}
            {isEditing && (
              <div className="mb-3 position-relative">
                <label className="form-label fw-semibold">New Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="form-control border-warning shadow-sm"
                    placeholder="Enter new password (optional)"
                    value={editedData.password || ""}
                    onChange={handleInputChange}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <small className="text-muted">
                  Leave blank if you don’t want to change your password.
                </small>
              </div>
            )}

            {/* Action Buttons */}
            <div className="d-flex gap-3 mt-4">
              {!isEditing ? (
                <button
                  className="btn btn-outline-danger"
                  onClick={handleEditClick}
                >
                  Edit User Details
                </button>
              ) : (
                <>
                  <button
                    className="btn btn-success"
                    onClick={handleSaveClick}
                    disabled={saving}
                  >
                    {saving ? "Saving..." : "Save Changes"}
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={handleCancelClick}
                    disabled={saving}
                  >
                    Cancel
                  </button>
                </>
              )}
              <button className="btn btn-danger" onClick={handleDeleteAccount}>Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
