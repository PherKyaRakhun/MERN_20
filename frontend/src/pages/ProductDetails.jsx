import axios from "axios";
// import { useDispatch } from "react-redux";
// import { addCart } from "../redux/action";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const params = useParams();
  console.log(params);
  const [result, setResult] = useState([]);

  const fetchdata1 = async () => {
    const responce1 = await axios.get(
      `https://fakestoreapi.com/products/${params.productID}`
    );

    setResult(responce1.data);
    console.log(responce1.data);

    if (responce1.data !== 200) {
      console.log("Error");
    }
  };
  useEffect(() => {
    // if (params) {
    fetchdata1();
    // }
  });
  return (
    <>
      <h1>Product</h1>
      {params ? (
        <>
          <div class="product-detail">
            <div class="product-image-container">
              <img
                src={result.image}
                alt="Product image"
                class="product-image"
              />
            </div>
            <div class="product-info">
              <h1 class="page-title">Data From API</h1>
              <h1 class="product-title">{result.title}</h1>
              <p class="product-description">{result.description}</p>
              <h2 class="product-price">${result.price}</h2>
              <div class="button-container">
                <button
                  class="add-to-cart-btn"
                  onClick={() => {
                    addProduct(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* <h1>Data From API</h1>
          <h1>{result.title}</h1>
          <h2>
            <img src={result.image} alt="Product image" />
          </h2>
          <h1>{result.description}</h1>
          <h1>${result.price}</h1>
          <div className="button-container">
            <button
              className="add-to-cart-btn"
              onClick={() => {
                addProduct(product);
              }}
            >
              Add to Cart
            </button>
          </div> */}
        </>
      ) : (
        <>
          <h1>No Params Are Showing </h1>
        </>
      )}
    </>
  );
};

export default ProductDetails;
