import { Link } from "react-router-dom";
import samsung from "../../../../../assets/pictures/SamsungLogo.png";
import lg from "../../../../../assets/pictures/lgLogo.png";
import telefunken from "../../../../../assets/pictures/telefunkenLogo.png";
import hisense from "../../../../../assets/pictures/hisenseLogo.png";
import vox from "../../../../../assets/pictures/voxLogo.png";
import { useState } from "react";

const TvNavigation = () => {
  const [selectedGroup, setSelectedGroup] = useState("All");

  const filteredTv =
    selectedGroup === "All"
      ? tvData
      : tvData.filter((work) => work.group === selectedGroup);

  return (
    <div className="tvWrapper">
      <div className="tvHolder">
        <Link
          tp={{ pathname: "/offer/tv" }}
          className={selectedGroup === "All" ? "active" : ""}
          onClick={() => setSelectedGroup("All")}
        />
        SVI
        <Link />
        <img
          src={samsung}
          alt="samsungLogo"
          className={selectedGroup === "samsungTV" ? "active" : ""}
          onClick={() => setSelectedGroup("samsungTV")}
        />
        <img
          src={vox}
          alt="voxLogo"
          className={selectedGroup === "voxTV" ? "active" : ""}
          onClick={() => setSelectedGroup("voxTV")}
        />
        <img
          src={hisense}
          alt="hisenseLogo"
          className={selectedGroup === "hisenseTV" ? "active" : ""}
          onClick={() => setSelectedGroup("hisenseTV")}
        />
        <img
          src={telefunken}
          alt="telefunkenLogo"
          className={selectedGroup === "telefunkenTV" ? "active" : ""}
          onClick={() => setSelectedGroup("telefunkenTV")}
        />
        <img
          src={lg}
          alt="lgLogo"
          className={selectedGroup === "lgTv" ? "active" : ""}
          onClick={() => setSelectedGroup("lgTv")}
        />
      </div>
      <div className="mobileDataList">
        {filteredTv.map((item) => (
          <Item key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TvNavigation;
