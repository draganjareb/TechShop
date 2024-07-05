import { Link } from "react-router-dom";
import "../mobileNavigation/mobileNavigation.style.css";
import samsungLogo from "../../../../../assets/pictures/SamsungLogo.png";
import iPhoneLogo from "../../../../../assets/pictures/iPhoneLogo.png";
import xiamioLogo from "../../../../../assets/pictures/xiamioLogo.png";
import huaweiLogo from "../../../../../assets/pictures/huaweiLogo.png";
import nokiaLogo from "../../../../../assets/pictures/nokiaLogo.png";
import Item from "../../../../../components/item/Item";
import { mobileData } from "../../../../../data/mobileData/mobileData";
import { useState } from "react";

const MobileNavigation = () => {
  const [selectedGroup, setSelectedGroup] = useState("All");

  const filteredMobile =
    selectedGroup === "All"
      ? mobileData
      : mobileData.filter((work) => work.group === selectedGroup);

  return (
    <div className="mobileNavWrapper">
      <div className="mobileNavHolder">
        <Link
          to={{ pathname: "/offer/mobile" }}
          className={selectedGroup === "All" ? "active" : ""}
          onClick={() => setSelectedGroup("All")}
        >
          SVI
        </Link>

        <img
          src={samsungLogo}
          alt="samsungLogo"
          className={selectedGroup === "SamsungPhone" ? "active" : ""}
          onClick={() => setSelectedGroup("SamsungPhone")}
        />

        <img
          src={iPhoneLogo}
          alt="iPhoneLogo"
          className={selectedGroup === "IPhonePhone" ? "active" : ""}
          onClick={() => setSelectedGroup("IPhonePhone")}
        />

        <img
          src={xiamioLogo}
          alt="xiamioLogo"
          className={selectedGroup === "XiamioPhone" ? "active" : ""}
          onClick={() => setSelectedGroup("XiamioPhone")}
        />

        <img
          src={huaweiLogo}
          alt="huaweiLogo"
          className={selectedGroup === "HuaweiPhone" ? "active" : ""}
          onClick={() => setSelectedGroup("HuaweiPhone")}
        />

        <img
          src={nokiaLogo}
          alt="nokiaLogo"
          className={selectedGroup === "NokiaPhone" ? "active" : ""}
          onClick={() => setSelectedGroup("NokiaPhone")}
        />
      </div>
      <div className="mobileDataList">
        {filteredMobile.map((item) => (
          <Item key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;
