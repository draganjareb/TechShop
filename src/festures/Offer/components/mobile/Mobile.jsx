import OfferNavigation from "../offerNavigation/OfferNavigation";
import "../mobile/mobile.style.css";
import MobileNavigation from "./mobileNavigation/MobileNavigation";

const Mobile = () => {
  return (
    <div className="mobileWrapper">
      <OfferNavigation />
      <MobileNavigation />
    </div>
  );
};

export default Mobile;
