import "../styles/pageTwo.style.css";
import huawei from "../../../assets/pictures/HuaweiP70.jpg";
import samsungBook from "../../../assets/pictures/SamsungBook4.jpg";
import redmi from "../../../assets/pictures/RedmiNote13Pro.jpg";
import samsungTab from "../../../assets/pictures/SamsungTabA8.jpg";
import headphone from "../../../assets/pictures/SonyHeadphone.jpg";
import sony from "../../../assets/pictures/SonyPlaystation.jpg";
import onePlus from "../../../assets/pictures/OnePlus9.jpg";
import hp from "../../../assets/pictures/HPEnvy.jpg";
import iPhone from "../../../assets/pictures/iPhone16.jpg";
import left from "../../../assets/pictures/left.png";
import right from "../../../assets/pictures/right.png";

// import { useState } from "react";

const PageTwo = () => {
//   const { ImagesAnimation } = useState();

  return (
    <div className="pageTwoHolder">
      <h2>Najbolji uređaji u ponudi</h2>
      <div className="bestOffer">
        <button
          className="sides"
          id="prev-slide"
          
        >
          <img src={left} className="leftAndRight left" />
        </button>
        <div className="imageList">
          <img src={samsungBook} alt="samsungBook" className="image" />
          <img src={huawei} alt="HuaweiP70" className="image" />
          <img src={redmi} alt="redmi" className="image" />
          <img src={samsungTab} alt="samsungTab" className="image" />
          <img src={headphone} alt="headphone" className="image" />
          <img src={sony} alt="sony" className="image" />
          <img src={hp} alt="envy" className="image" />
          <img src={iPhone} alt="iPhone" className="image" />
          <img src={onePlus} alt="onePlus" className="image" />
        </div>
      </div>
      <button
        className="sides"
        id="next-slide"
        // onClick={() => ImagesAnimation()}
      >
        <img src={right} className="leftAndRight right" />
      </button>
      <div className="sliderScrollbar">
        <div className="scrollbar-track">
          <div className="scrollbar-thumb"></div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
