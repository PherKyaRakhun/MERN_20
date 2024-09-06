import "./Cart.css";
const CartItem = ({ product, clickHandler }) => {
  return (
    <div className="flex">
      {" "}
      {/* // */}
      <div className="product-card" key={product.id} onClick={clickHandler}>
        <img
          src={product.image}
          alt={product.description}
          className="product-image"
        />
        <div className="product-info">
          <p className="product-description">{product.title}</p>
          {/* <p className="product-description">{product.description}</p> */}
          <p className="product-price">${product.price}</p>
          {/* <p>Rating {product.rating && product.rating.rate}</p> // Used for Rating Points */}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
