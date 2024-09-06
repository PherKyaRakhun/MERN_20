import { useNavigate } from "react-router-dom";

import("./Home.css");
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section id="showcase">
        <div className="container">
          <div className="content">
            <h1>Elevate Your Audio Journey</h1>
            <p>Experience Sound in Its Purest Form</p>
            <button
              id="shopnow"
              onClick={() => {
                navigate("/products");
              }}
            >
              Shop Now
            </button>
            <button id="learnmore">Learn More</button>
          </div>
          <img
            src="https://cdn.prod.website-files.com/6493dcfff5da93a7486cd781/6494062b71fbb5f238835e71_Hero.png"
            alt=""
          />
        </div>
      </section>

      <div className="featured-products-container">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="badge">New</div>
            <div className="product-image-placeholder">
              <img
                src="https://cdn.prod.website-files.com/649409997a1a98426b1aa230/6494209ae4949b66bd9c69f1_Earbud%20Y168A-p-500.jpg"
                alt=""
              />
            </div>
            <div className="product-info">
              <p className="product-category">Earbuds</p>
              <p className="product-title">Earbud Y168A</p>
              <p className="product-price">$270.00 USD</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image-placeholder">
              <img
                src="https://cdn.prod.website-files.com/649409997a1a98426b1aa230/6494208ba7cf97017c588eeb_Pro%20X168A-p-500.jpg"
                alt=""
              />
            </div>
            <div className="product-info">
              <p className="product-category">Headphones</p>
              <p className="product-title">Pro X168A</p>
              <p className="product-price">$250.00 USD</p>
            </div>
          </div>
          <div className="product-card">
            <div className="badge">Sale</div>
            <div className="product-image-placeholder">
              <img
                src="https://cdn.prod.website-files.com/649409997a1a98426b1aa230/6494205c00baad9c9f0ed598_Speaker%20P168A-p-500.jpg"
                alt=""
              />
            </div>
            <div className="product-info">
              <p className="product-category">Speakers</p>
              <p className="product-title">Speaker P168A</p>
              <p className="product-price">$240.00 USD</p>
              <p className="original-price">$270.00 USD</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image-placeholder">
              <img
                src="https://cdn.prod.website-files.com/649409997a1a98426b1aa230/6494204fe02b9ba4e337801e_Wireless%20Charger-p-500.jpg"
                alt=""
              />
            </div>
            <div className="product-info">
              <p className="product-category">Accessories</p>
              <p className="product-title">Wireless Charger</p>
              <p className="product-price">$35.00 USD</p>
            </div>
          </div>
        </div>
        <div className="see-all-button">
          <button
            onClick={() => {
              navigate("/products");
            }}
          >
            See All Products
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
