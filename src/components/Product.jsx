const Product = ({ src, name, description, price, onCheckout }) => {
  return (
    <li className="product-item">
      <img className="product-image" src={src} alt={name} />
      <h3 className="product-name">{name}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">
        $
        {price.toLocaleString("en-NZ", {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })}
      </p>
      <button className="buy-now" onClick={onCheckout}>
        Buy Now
      </button>
    </li>
  );
};

export default Product;
