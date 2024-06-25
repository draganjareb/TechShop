import "../styles/pageThree.style.css";
import fold from "../../../assets/pictures/zFold.jpg";

const PageThree = () => {
  return (
    <div className="pageThreeHolder">
      <h1>Uskoro u ponudi</h1>
      <div className="firstOffer">
        <div className="firstOfferImages">
          <img src={fold} alt="GalaxyZFold6" />
        </div>
        <div className="firstOfferText">
          <h2></h2>
          <h3></h3>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
