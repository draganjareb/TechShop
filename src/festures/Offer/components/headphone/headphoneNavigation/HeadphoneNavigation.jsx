import { Link } from "react-router-dom";
import "./headphoneNavigation.style.css";
import { headphoneData } from "../../../../../data/headphoneData/headphoneData";
import jbl from "../../../../../assets/pictures/jbl.png";
import sennheiser from "../../../../../assets/pictures/sennheiser.png";
import sony from "../../../../../assets/pictures/sony.png";
import apple from "../../../../../assets/pictures/iPhoneLogo.png";
import bose from "../../../../../assets/pictures/bose.png";
import Item4 from "../../../../../components/item/item4/Item4";
import { useState } from "react";

const HeadphoneNavigation = () => {
  const [selectedGroup, setSelectedGroup] = useState("All");

  const filteredHeadphone =
    selectedGroup === "All"
      ? headphoneData
      : headphoneData.filter((work) => work.group === selectedGroup);

  return (
    <div className="mobileNavWrapper">
      <div className="mobileNavHolder">
        <Link
          to={{ pathname: "/offer/headphone" }}
          className={selectedGroup === "All" ? "active" : ""}
          onClick={() => setSelectedGroup("All")}
        >
          SVI
        </Link>

        <img
          src={bose}
          alt="boseLogo"
          className={selectedGroup === "BoseHP" ? "active" : ""}
          onClick={() => setSelectedGroup("BoseHP")}
        />

        <img
          src={apple}
          alt="appleLogo"
          className={selectedGroup === "AppleHP" ? "active" : ""}
          onClick={() => setSelectedGroup("AppleHP")}
        />

        <img
          src={jbl}
          alt="jblLogo"
          className={selectedGroup === "JblHP" ? "active" : ""}
          onClick={() => setSelectedGroup("JblHP")}
        />

        <img
          src={sony}
          alt="sonyLogo"
          className={selectedGroup === "SonyHP" ? "active" : ""}
          onClick={() => setSelectedGroup("SonyHP")}
        />

        <img
          src={sennheiser}
          alt="sennheiserLogo"
          className={selectedGroup === "SennheiserHP" ? "active" : ""}
          onClick={() => setSelectedGroup("SennheiserHP")}
        />
      </div>
      <div className="mobileDataList">
        {filteredHeadphone.map((item) => (
          <Item4 key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default HeadphoneNavigation;
