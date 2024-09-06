import React from "react";
import("./Footer.css");

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo">CRESCENDO</div>
          <p>
            Suspendisse quis sodales nunc. Sed ligula enim, mattis ut sem id,
            mollis sagittis sapien.
          </p>
          <div className="subscribe-section">
            <h4>Join Our List Today!</h4>
            <form className="subscribe-form">
              <input type="email" placeholder="Your Email" />
              <button type="submit">Subscribe</button>
            </form>
            <p className="privacy-text">
              By subscribing you agree to our <a href="#">Privacy Policy</a> and
              provide consent to receive updates from our company.
            </p>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <div className="column">
              <h4>Pages</h4>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/products">Shop</a>
              <a href="/products">Product Category</a>
              <a href="#">Product Single</a>
            </div>
            <div className="column">
              <h4>Utility</h4>
              <a href="#">Style Guide</a>
              <a href="/license">Licenses</a>
              <a href="/changelog">Changelog</a>
              <a href="/error">404</a>
              <a href="/password">Password</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-media">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p>Built by Salmon Pixel · Powered by Webflow</p>
      </div>
    </footer>
  );
};

export default Footer;
