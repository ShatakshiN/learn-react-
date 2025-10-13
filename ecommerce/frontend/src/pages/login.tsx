import type { ChangeEvent, FormEvent } from "react";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

import "../views/login.css";
import api from "../api/axiosInstance";

type State = {
  email: string;
  password: string;
};

type Action =
  | { type: "SET_FIELD"; field: keyof State; value: string };

const initialState: State = {
  email: "",
  password: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

function Login() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange =
    (field: keyof State) => (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: "SET_FIELD", field, value: e.target.value });
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      
      const response = await api.post('/users/login', state);

      const data = response.data; 

      localStorage.setItem("token", data.token);

      alert("Logged in successfully!");
      navigate('/userProfile');
    } catch (error: any) {
      console.log(error)
      alert(error.response?.data?.msg || "Login failed");
    }


  };

  return (
    <div className="login-wrapper">
      <div className="login-form p-4 shadow rounded">
        <h2 className="mb-4 text-center">Login</h2>

        <form onSubmit={handleSubmit}>
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
              type="password"
              className="form-control"
              placeholder="Password"
              required
              value={state.password}
              onChange={handleChange("password")}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" >
            login
          </button>
        </form>

        <div className="text-center my-3">
          <span className="divider">------ or ------</span>
        </div>

        <div className="text-center">
          <button className="btn btn-primary w-100"
            type="button" 
            onClick={() => navigate("/signup")}
          >
            New user? Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

