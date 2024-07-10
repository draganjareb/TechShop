import { Link } from "react-router-dom";
import samsung from "../../../../../assets/pictures/SamsungLogo.png";
import lg from "../../../../../assets/pictures/lgLogo.png";
import telefunken from "../../../../../assets/pictures/telefunkenLogo.png";
import hisense from "../../../../../assets/pictures/hisenseLogo.png";
import vox from "../../../../../assets/pictures/voxLogo.png";
import { useState } from "react";
import Item2 from "../../../../../components/item/item2/item2";
import { dataTv } from "../../../../../data/tvData/tvData";
import "./tvNavigation.style.css";

const TvNavigation = () => {
  const [selectedGroup, setSelectedGroup] = useState("All");

  const filteredTv =
    selectedGroup === "All"
      ? dataTv
      : dataTv.filter((work) => work.group === selectedGroup);

  return (
    <div className="tvWrapper">
      <div className="tvHolder">
        <Link
          to={{ pathname: "/offer/tv" }}
          className={selectedGroup === "All" ? "active" : ""}
          onClick={() => setSelectedGroup("All")}
        >
          SVI
        </Link>
        <img
          src={samsung}
          alt="samsungLogo"
          className={selectedGroup === "SamsungTV" ? "active" : ""}
          onClick={() => setSelectedGroup("SamsungTV")}
        />
        <img
          src={vox}
          alt="voxLogo"
          className={selectedGroup === "VOXTV" ? "active" : ""}
          onClick={() => setSelectedGroup("VOXTV")}
        />
        <img
          src={hisense}
          alt="hisenseLogo"
          className={selectedGroup === "HisenseTV" ? "active" : ""}
          onClick={() => setSelectedGroup("HisenseTV")}
        />
        <img
          src={telefunken}
          alt="telefunkenLogo"
          className={selectedGroup === "TelefunkenTV" ? "active" : ""}
          onClick={() => setSelectedGroup("TelefunkenTV")}
        />
        <img
          src={lg}
          alt="lgLogo"
          className={selectedGroup === "LGTV" ? "active" : ""}
          onClick={() => setSelectedGroup("LGTV")}
        />
      </div>
      <div className="mobileDataList">
        {filteredTv.map((item) => (
          <Item2 key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TvNavigation;
