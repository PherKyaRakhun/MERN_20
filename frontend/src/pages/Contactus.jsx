import React from "react";
import "./Contactus.css";

const Contactus = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone Number" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <div>
            <h4>Call Center</h4>
            <p>+1-234-567-8910</p>
          </div>
          <div>
            <h4>Email Support</h4>
            <p>support@example.com</p>
          </div>
          <div>
            <h4>Crescendo Main Store</h4>
            <p>123 Ipsum Street, Ipsum City, Dolor State</p>
          </div>
        </div>
      </div>

      <div className="store-locator">
        <h2>Find a Store Near You</h2>
        <div className="regions">
          <select>
            <option>Central Region</option>
            <option>Southern Region</option>
          </select>
          <select>
            <option>Northern Region</option>
            <option>Eastern Region</option>
          </select>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <details>
            <summary>What payment methods are accepted?</summary>
            <p>We accept all major credit cards, debit cards, and PayPal.</p>
          </details>
          <details>
            <summary>How can I contact customer support?</summary>
            <p>
              You can contact us via email at support@example.com or by phone at
              +1-234-567-8910.
            </p>
          </details>
          <details>
            <summary>Is international shipping available?</summary>
            <p>Yes, we ship internationally to select countries.</p>
          </details>
          <details>
            <summary>Can I track the status of my order?</summary>
            <p>
              Yes, you can track your order using the tracking number provided
              after purchase.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
