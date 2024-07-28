import { Link } from "react-router-dom";
import { tabletsData } from "../../../../../data/tabletsData/tabletsData";
import { useState } from "react";
import apple from "../../../../../assets/pictures/iPhoneLogo.png";
import Item3 from "../../../../../components/item/item3/item3";
import "./tabletNavigation.style.css";
import acer from "../../../../../assets/pictures/acer.png";
import samsung from "../../../../../assets/pictures/SamsungLogo.png";
import asus from "../../../../../assets/pictures/asusLogo.png";
import onePlus from "../../../../../assets/pictures/onePlus.png";

const TabletNavigation = () => {
  const [selectedGroup, setSelectedGroup] = useState("All");

  const filteredTablets =
    selectedGroup === "All"
      ? tabletsData
      : tabletsData.filter((work) => work.group === selectedGroup);

  return (
    <div className="tabletWrapper">
      <div className="tabletHolder">
        <Link
          to={{ pathname: "/offer/laptop" }}
          className={selectedGroup === "All" ? "active" : ""}
          onClick={() => setSelectedGroup("All")}
        >
          SVI
        </Link>
        <img
          src={apple}
          alt="appleLogo"
          className={selectedGroup === "iPhoneTab" ? "active" : ""}
          onClick={() => setSelectedGroup("iPhoneTab")}
        />
        <img
          src={acer}
          alt="Acer Logo"
          className={selectedGroup === "AcerTab" ? "active" : ""}
          onClick={() => setSelectedGroup("AcerTab")}
        />
        <img
          src={samsung}
          alt="Samsung Logo"
          className={selectedGroup === "SamsungTab" ? "active" : ""}
          onClick={() => setSelectedGroup("SamsungTab")}
        />
        <img
          src={asus}
          alt="asusLogo"
          className={selectedGroup === "AsusTab" ? "active" : ""}
          onClick={() => setSelectedGroup("AsusTab")}
        />
        <img
          src={onePlus}
          alt="onePlus"
          className={selectedGroup === "OneTab" ? "active" : ""}
          onClick={() => setSelectedGroup("OneTab")}
        />
      </div>
      <div className="tabletData">
        {filteredTablets.map((item) => (
          <Item3 key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TabletNavigation;
