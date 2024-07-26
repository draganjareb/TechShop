import OfferNavigation from "../offerNavigation/OfferNavigation";
import "../headphone/headphone.style.css";
import HeadphoneNavigation from "./headphoneNavigation/HeadphoneNavigation";

const Headphone = () => {
  return (
    <div className="headphoneWrapper">
      <OfferNavigation />
      <HeadphoneNavigation />
    </div>
  );
};

export default Headphone;
