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
                                images={product.images}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                            />
                        );
                    })}
                </ul>
        </>
    );
};

export default Products;