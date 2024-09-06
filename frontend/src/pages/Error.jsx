import React from "react";
import("./Error.css");
import { Navigate, useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <p>The page you are looking for doesn't exist or has been moved</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Return Home
      </button>
    </div>
  );
};

export default Error;
