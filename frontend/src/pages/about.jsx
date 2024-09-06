// AboutUsPage.jsx
import React from "react";
import "./about.css"; // Import the corresponding CSS file

const About = () => {
  return (
    <div className="about-us-page">
      <div className="about-us">
        <h2>About Crescendo</h2>
        <div className="about-story">
          <img
            src="https://cdn.prod.website-files.com/6493dcfff5da93a7486cd781/6494064ee7c39da6541c5740_About-p-800.jpg"
            alt="Crescendo Product"
            className="about-img"
          />
          <div>
            <h3>Our Story</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>
      </div>

      <div className="values-section">
        <h2>Our Values</h2>
        <div className="values">
          <div>
            <h4>Quality</h4>
            <p>Commitment to superior sound and durability in our products.</p>
          </div>
          <div>
            <h4>Customer Satisfaction</h4>
            <p>Exceptional service, personalized experiences.</p>
          </div>
          <div>
            <h4>Innovation</h4>
            <p>Cutting-edge features and immersive experiences.</p>
          </div>
          <div>
            <h4>Sustainability</h4>
            <p>Commitment to environmental stewardship.</p>
          </div>
        </div>
      </div>

      <div className="features">
        <h2>Experience Streamlined Shopping with Crescendo</h2>
        <div className="feature-cards">
          <div>
            <h4>Free Delivery</h4>
            <p>Enjoy free delivery on all products.</p>
          </div>
          <div>
            <h4>Self Pickup</h4>
            <p>Pick up your order from our store locations.</p>
          </div>
          <div>
            <h4>Warranty</h4>
            <p>All products come with a warranty.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
