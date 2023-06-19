const Product = ({ image, name, description, price }) => {
    return (
        <li className="product-item">
            <img className="product-image" src={image} alt={name} />
                <h3 className="product-name">{name}</h3>
                    <p className="product-description">{description}</p>
                    <p className="product-price">{price}</p>
            <button>Buy Now</button>
        </li>
    )
}

export default Product;