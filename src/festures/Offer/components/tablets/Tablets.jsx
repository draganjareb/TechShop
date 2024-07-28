import OfferNavigation from "../offerNavigation/OfferNavigation";
import "../mobile/mobile.style.css";
import TabletNavigation from "./components/TabletNavigation";

const Tablets = () => {
  return (
    <div className="mobileWrapper">
      <OfferNavigation />
      <TabletNavigation />
    </div>
  );
};
export default Tablets;
