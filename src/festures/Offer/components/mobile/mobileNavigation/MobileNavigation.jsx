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
        <Link to={{ pathname: "/offer/mobile/all" }} className="allPhone" >SVI</Link>

        <Link to={{ pathname: "/offer/mobile/samsung" }}>
          <img
            src={samsungLogo}
            alt="samsungLogo"
            className="samsungLogoPictures"
          />
        </Link>
        <Link to={{ pathname: "/offer/mobile/iPhone" }}>
          <img
            src={iPhoneLogo}
            alt="iPhoneLogo"
            className="samsungLogoPictures"
          />
        </Link>
        <Link to={{ pathname: "/offer/mobile/xiamio" }}>
          <img
            src={xiamioLogo}
            alt="xiamioLogo"
            className="samsungLogoPictures"
          />
        </Link>
        <Link to={{ pathname: "/offer/mobile/huawei" }}>
          <img
            src={huaweiLogo}
            alt="huaweiLogo"
            className="samsungLogoPictures"
          />
        </Link>
        <Link to={{ pathname: "/offer/mobile/nokia" }}>
          <img
            src={nokiaLogo}
            alt="nokiaLogo"
            className="samsungLogoPictures"
          />
        </Link>
      </div>
    </div>
  );
};

export default MobileNavigation;
