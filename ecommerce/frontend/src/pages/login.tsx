import type { ChangeEvent, FormEvent } from "react";
import { useReducer } from "react";

import "../views/login.css";

type State = {
  emailOrPhone: string;
  password: string;
};

type Action =
  | { type: "SET_FIELD"; field: keyof State; value: string };

const initialState: State = {
  emailOrPhone: "",
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
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange =
    (field: keyof State) => (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: "SET_FIELD", field, value: e.target.value });
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login data:", state);
    alert("Logged in!");
  };

  return (
    <div className="login-wrapper">
      <div className="login-form p-4 shadow rounded">
        <h2 className="mb-4 text-center">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email or Phone"
              required
              value={state.emailOrPhone}
              onChange={handleChange("emailOrPhone")}
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
            Login
          </button>
        </form>

        <div className="text-center my-3">
          <span className="divider">------ or ------</span>
        </div>

        <div className="text-center">
          <button className="btn btn-primary w-100">
            New user? Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

