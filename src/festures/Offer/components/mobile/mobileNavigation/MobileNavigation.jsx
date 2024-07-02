import { Link } from "react-router-dom";
import "../mobileNavigation/mobileNavigation.style.css";
import samsungLogo from "../../../../../assets/pictures/SamsungLogo.png";
import iPhoneLogo from "../../../../../assets/pictures/iPhoneLogo.png";
import xiamioLogo from "../../../../../assets/pictures/xiamioLogo.png";
import huaweiLogo from "../../../../../assets/pictures/huaweiLogo.png";
import nokiaLogo from "../../../../../assets/pictures/nokiaLogo.png";

const MobileNavigation = () => {
  return (
    <div className="mobileNavWrapper">
      <div className="mobileNavHolder">
        <Link to={{ pathname: "/offer/mobile" }} className="allPhone">
          SVI
        </Link>

        <img
          src={samsungLogo}
          alt="samsungLogo"
          className="samsungLogoPictures"
        />

        <img
          src={iPhoneLogo}
          alt="iPhoneLogo"
          className="samsungLogoPictures"
        />

        <img
          src={xiamioLogo}
          alt="xiamioLogo"
          className="samsungLogoPictures"
        />

        <img
          src={huaweiLogo}
          alt="huaweiLogo"
          className="samsungLogoPictures"
        />

        <img src={nokiaLogo} alt="nokiaLogo" className="samsungLogoPictures" />
      </div>
    </div>
  );
};

export default MobileNavigation;
