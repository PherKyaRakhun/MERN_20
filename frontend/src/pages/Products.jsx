import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Products.css";
// import { data } from "autoprefixer";
// import CartItem from "../component/cart";

const Products = ({ CartItem }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProduct = async () => {
    console.log("Fetching products...");
    const response = await axios.get("https://fakestoreapi.com/products");
    // const data = await response.json();

    if (response.status === 200) {
      setProducts(response.data);
      setFilteredProducts(response.data);
    }
    console.log("Products", response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const filterProduct = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const updatedList = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(updatedList);
    }
  };

  return (
    <>
      <h1>Products</h1>

      <div className="buttondiv">
        <button
          onClick={() => {
            filterProduct("all");
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            filterProduct("women's clothing");
          }}
        >
          Wemen Clothing
        </button>
        <button
          onClick={() => {
            filterProduct("men's clothing");
          }}
        >
          Men's Cloth
        </button>

        <button
          onClick={() => {
            filterProduct("jewelery");
          }}
        >
          Jewelery
        </button>
        <button
          onClick={() => {
            filterProduct("electronics");
          }}
        >
          Electronics
        </button>
      </div>
      <div>
        // Agar list ma kuch para ha to
        {filteredProducts.length ? (
          <div className="flex">
            {filteredProducts.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                clickHandler={() => {
                  navigate("/product-details/" + product.id);
                }}
              />
            ))}
          </div>
        ) : (
          <>
            <h1>Item NOt Found</h1>
          </>
        )}
      </div>
    </>
  );
};

export default Products;
