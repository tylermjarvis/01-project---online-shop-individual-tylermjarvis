import logo from "../images/jap-snack-logo.jpg";

const Header = () => {
  return (
    <div className="header-grid">
      <img className="logo" src={logo} alt="Jap Snack Logo" />
      <h1 className="shop-name">Jap Snack</h1>
    </div>
  );
};

export default Header;
