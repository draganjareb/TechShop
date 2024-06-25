import { Link } from "react-router-dom";
import "./navigation.style.css";
import logo from "../../assets/pictures/techshop.png";
import face from "../../assets/pictures/face.png";
import instagram from "../../assets/pictures/insta.png";
import linked from "../../assets/pictures/linked.png";

const Navigation = () => {
  return (
    <div className="navigationHolder">
      <img src={logo} alt="logo" className="logoPictures" />
      <div className="navigationLink">
        <Link to={{ pathname: "/" }}>Početna</Link>
        <Link to={{ pathname: "/offer" }}>Ponuda</Link>
        <Link to={{ pathname: "/cart" }}>Korpa</Link>
        <Link to={{ pathname: "/partners" }}>Partneri</Link>
        <Link to={{ pathname: "/about" }}>O nama</Link>
        <Link to={{ pathname: "/contact" }}>kontakt</Link>
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
