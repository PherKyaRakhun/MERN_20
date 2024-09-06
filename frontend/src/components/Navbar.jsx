import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
// import from "/assets/cart.svg"
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to={"/"}>
          <img
            src="https://cdn.prod.website-files.com/6493dcfff5da93a7486cd781/6493fc945ac55c5cf0b0243c_Logo.svg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/findus"}>Find US</Link>
        <Link to={"/pages"}>Pages</Link>
      </div>
      {/* Action Items */}
      <div className="navbar-actions">
        <button
          className="shop-now-btn"
          onClick={() => {
            navigate("/products");
          }}
        >
          Shop Now
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
