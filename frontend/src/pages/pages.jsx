import("./Pages.css");
import { Navigate, useNavigate } from "react-router-dom";
const Pages = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="button-container">
        <div className="button-group">
          <button
            className="btn"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/products");
            }}
          >
            Shop
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/products");
            }}
          >
            Products
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/error");
            }}
          >
            404
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/findus");
            }}
          >
            Find Us
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </button>

          <button
            className="btn"
            onClick={() => {
              navigate("/license");
            }}
          >
            Licences
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/password");
            }}
          >
            Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Pages;
