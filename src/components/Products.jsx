import Product from "./Product";
import { checkout } from "../services/checkout";

const Products = ({ products }) => {
  return (
    <>
      <h3>Popular Products</h3>
      <ul className="product-grid">
        {products.map((product) => {
          const {
            id,
            name,
            description,
            imageUrl = product.images[0],
            price = product.prices[0].unit_amount / 100,
            priceId = product.prices[0].id,
          } = product;
          return (
            <Product
              key={id}
              name={name}
              description={description}
              src={imageUrl}
              price={price}
              onCheckout={() => checkout(priceId)}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Products;
