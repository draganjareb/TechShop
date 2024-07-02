import OfferNavigation from "../offerNavigation/OfferNavigation";
import "../mobile/mobile.style.css";
import MobileNavigation from "./mobileNavigation/MobileNavigation";
import { mobileData } from "../../../../data/mobileData/mobileData";
import Item from "../../../../components/item/Item";

const Mobile = () => {
  return (
    <div className="mobileWrapper">
      <OfferNavigation />
      <MobileNavigation />
      <div className="mobileDataList">
        {mobileData.map((item) => (
          <Item key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Mobile;
