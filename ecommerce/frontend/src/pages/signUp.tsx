import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import "../views/signup.css";

function Signup() {
  const [profilePic, setProfilePic] = useState<string>( "https://dummyimage.com/120x120/cccccc/000000.png&text=Profile");

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-form p-4 shadow rounded">
        <h2 className="mb-4 text-center">Sign Up</h2>

        {/* Profile Upload */}
        <div className="d-flex justify-content-center mb-3">
          <label htmlFor="profilePicUpload" className="profile-upload">
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <input
              type="file"
              id="profilePicUpload"
              accept="image/*"
              onChange={handleImageUpload}
              hidden
            />
          </label>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <input type="text" className="form-control" placeholder="First Name" required />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Last Name" required />
            </div>
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" required />
          </div>
          <div className="mb-3">
            <input type="tel" className="form-control" placeholder="Phone Number" required />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>

        {/* Divider */}
        <div className="text-center my-3">
          <span className="divider">------ or ------</span>
        </div>

        {/* Sign In */}
        <div className="text-center">
          <button className="btn btn-primary w-100">Already a user? Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
