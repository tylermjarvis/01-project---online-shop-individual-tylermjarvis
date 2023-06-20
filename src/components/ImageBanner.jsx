import banner from "../images/japanese-snack-banner.jpg";
import "../App.css";

const ImageBanner = () => {
  return (
    <div className="image-container">
      <img className="image-banner" src={banner} alt="Japanese snacks" />
      {/* <div className="overlay-container overlay-2">
        <a className="overlay-products-page-link" href="../index.html">
          Shop Now
        </a>
      </div> */}
    </div>
  );
};

export default ImageBanner;
