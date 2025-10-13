import type { ChangeEvent, FormEvent } from "react";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";


import "../views/signup.css";
import api from "../api/axiosInstance";

type State = {
  profilePic: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
};

type Action =
  | { type: "SET_FIELD"; field: keyof State; value: string }
  | { type: "SET_PROFILE_PIC"; value: string }
  | {type: "RESET"};

const initialState: State = {
  profilePic:
    "https://dummyimage.com/120x120/cccccc/000000.png&text=Profile",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_PROFILE_PIC":
      return { ...state, profilePic: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function Signup() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () =>
        dispatch({ type: "SET_PROFILE_PIC", value: reader.result as string });
      reader.readAsDataURL(file);
    }
  };

  const handleChange =
    (field: keyof State) => (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: "SET_FIELD", field, value: e.target.value });
    };

  
  const validateInputs = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(state.email)) {
      alert("Please enter a valid email (e.g. abc@gmail.com)");
      return false;
    }

    if (!phoneRegex.test(state.phone)) {
      alert("Phone number must be exactly 10 digits");
      return false;
    }

    return true;
  };


  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateInputs()) return;
    
    const formData = new FormData();
    formData.append("firstName", state.firstName);
    formData.append("lastName", state.lastName);
    formData.append("email", state.email);
    formData.append("phone", state.phone);
    formData.append("password", state.password);

    const fileInput = document.getElementById("profilePicUpload") as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      formData.append("dp", fileInput.files[0]);
    }

    try {
      const { data } = await api.post("/users/signup", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert(data.data.msg);
      //console.log("Profile URL saved in DB:", data.user.dp_url);
      
      dispatch({ type: "RESET" });

      if (fileInput) fileInput.value = "";

    } catch (error: any) {
      alert(error.response?.data?.msg || "Sign up failed!");
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-form p-4 shadow rounded">
        <h2 className="mb-4 text-center">Sign Up</h2>

        
        <div className="d-flex justify-content-center mb-3">
          <label htmlFor="profilePicUpload" className="profile-upload">
            <img src={state.profilePic} alt="Profile" className="profile-pic" />
            <input
              type="file"
              id="profilePicUpload"
              accept="image/*"
              onChange={handleImageUpload}
              hidden
            />
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                required
                value={state.firstName}
                onChange={handleChange("firstName")}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                required
                value={state.lastName}
                onChange={handleChange("lastName")}
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
              value={state.email}
              onChange={handleChange("email")}
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              required
              value={state.phone}
              onChange={handleChange("phone")}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              value={state.password}
              onChange={handleChange("password")}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>

        <div className="text-center my-3">
          <span className="divider">------ or ------</span>
        </div>

        
        <div className="text-center">
          <button className="btn btn-primary w-100"
            type="button" // important so it doesn't submit the form
            onClick={() => navigate("/login")}
          >
            Already a user? Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
