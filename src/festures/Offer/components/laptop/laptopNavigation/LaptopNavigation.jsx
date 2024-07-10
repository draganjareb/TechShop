import { Link } from "react-router-dom";
import { laptopData } from "../../../../../data/laptopData/laptopData";
import { useState } from "react";
import apple from "../../../../../assets/pictures/iPhoneLogo.png";
import Item from "../../../../../components/item/item/Item";
import "./laptopNavigation.style.css";
import lenovo from "../../../../../assets/pictures/lenovoLogo.png";
import hp from "../../../../../assets/pictures/hpLogo.png";
import asus from "../../../../../assets/pictures/asusLogo.png";
import dell from "../../../../../assets/pictures/dellLogo.png";

const LaptopNavigation = () => {
  const [selectedGroup, setSelectedGroup] = useState("All");

  const filteredLaptop =
    selectedGroup === "All"
      ? laptopData
      : laptopData.filter((work) => work.group === selectedGroup);

  return (
    <div className="laptopWrapper">
      <div className="laptopHolder">
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
          className={selectedGroup === "AppleGroup" ? "active" : ""}
          onClick={() => setSelectedGroup("AppleGroup")}
        />
        <img
          src={lenovo}
          alt="lenovoLogo"
          className={selectedGroup === "LenovoGroup" ? "active" : ""}
          onClick={() => setSelectedGroup("LenovoGroup")}
        />
        <img
          src={hp}
          alt="hpLogo"
          className={selectedGroup === "HpGroup" ? "active" : ""}
          onClick={() => setSelectedGroup("HpGroup")}
        />
        <img
          src={asus}
          alt="asusLogo"
          className={selectedGroup === "AsusGroup" ? "active" : ""}
          onClick={() => setSelectedGroup("AsusGroup")}
        />
        <img
          src={dell}
          alt="dellLogo"
          className={selectedGroup === "DellGroup" ? "active" : ""}
          onClick={() => setSelectedGroup("DellGroup")}
        />
      </div>
      <div className="mobileDataList">
        {filteredLaptop.map((item) => (
          <Item key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LaptopNavigation;
