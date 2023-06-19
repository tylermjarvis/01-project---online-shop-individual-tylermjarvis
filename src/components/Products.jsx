import Product from "./Product";

const Products = ({ products }) => {
    return (
        <>
            <h2>Popular Products</h2>
                <ul className="product-grid">
                    {products.map((product) => {
                        return (
                            <Product
                                key={product.id}
                                image={product.image[0]}
                                name={product.name}
                                description={product.description}
                                price={product.price[0]}
                            />
                        );
                    })}
                </ul>
        </>
    );
};

export default Products;