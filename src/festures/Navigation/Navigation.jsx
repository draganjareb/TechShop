import { Link } from "react-router-dom";
import "./navigation.style.css";
import logo from "../../assets/pictures/techshop.png";
import face from "../../assets/pictures/face.png";
import instagram from "../../assets/pictures/instagram.jpg";
import linked from "../../assets/pictures/linked.png";

const Navigation = () => {
  return (
    <div className="navigationHolder">
      <img src={logo} alt="logo" className="logoPictures" />
      <div className="navigationLink">
        <Link to={{ pathname: "/" }}>Home Page</Link>
        <Link to={{ pathname: "/offer" }}>Offer</Link>
        <Link to={{ pathname: "/cart" }}>Cart</Link>
        <Link to={{ pathname: "/partners" }}>Partners</Link>
        <Link to={{ pathname: "/about" }}>About</Link>
        <Link to={{ pathname: "/contact" }}>Contact</Link>
      </div>
      <div className="logos">
        <img src={face} alt="faceLogo" />
        <img src={instagram} alt="instagramLogo" />
        <img src={linked} alt="linkedLogo" />
      </div>
    </div>
  );
};

export default Navigation;
