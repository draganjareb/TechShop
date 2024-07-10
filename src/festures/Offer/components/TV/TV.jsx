import OfferNavigation from "../offerNavigation/OfferNavigation";
import "../TV/tv.style.css";
import TvNavigation from "./TvNavigation/TvNavigation";

const TV = () => {
  return (
    <div className="tvPageWrapper">
      <OfferNavigation />
      <TvNavigation />
    </div>
  );
};

export default TV;
