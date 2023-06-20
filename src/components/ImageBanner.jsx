import banner from "../images/japanese-snack-banner.jpg";

const ImageBanner = () => {
  return (
    <div className="image-banner">
      <img src={banner} alt="Japanese snacks" />
      <h2 className="image-title">Japanese Snacks</h2>
      <a className="products-page-link" href="../index.html">
        Shop Now
      </a>
    </div>
  );
};

export default ImageBanner;
