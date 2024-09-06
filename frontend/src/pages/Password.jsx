import React, { useState } from "react";
import "./Password.css";

const Password = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered Password: ${password}`);
  };

  return (
    <div className="protected-container">
      <h1 className="title">Protected Page</h1>
      <form onSubmit={handleSubmit} className="password-form">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="password-input"
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      <a href="/" className="return-home">
        Return Home
      </a>
    </div>
  );
};

export default Password;
