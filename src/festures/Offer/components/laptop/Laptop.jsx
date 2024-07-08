import OfferNavigation from "../offerNavigation/OfferNavigation";
import "../laptop/laptop.style.css";
import LaptopNavigation from "./laptopNavigation/LaptopNavigation";

const Laptop = () => {
  return (
    <div className="headphoneWrapper">
      <OfferNavigation />
      <LaptopNavigation />
    </div>
  );
};

export default Laptop;
