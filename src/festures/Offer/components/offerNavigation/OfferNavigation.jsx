import { Link } from "react-router-dom";
import "../offerNavigation/offerNavigation.style.css";

const OfferNavigation = () => {
  return (
    <div className="offerNavWrapper">
      <div className="offerNavHolder">
        <Link to={{ pathname: "/offer/mobile" }}>Mobitel</Link>
        <Link to={{ pathname: "/offer/laptop" }}>Laptop</Link>
        <Link to={{ pathname: "/offer/tv" }}>TV</Link>
        <Link to={{ pathname: "/offer/tablets" }}>Tablet</Link>
        <Link to={{ pathname: "/offer/headphone" }}>Slušalice</Link>
      </div>
    </div>
  );
};

export default OfferNavigation;
