import background from "../../../assets/pictures/images.jpg";
import "../styles/pageOne.style.css";

const PageOne = () => {
  return (
    <div className="pageOneHolder">
      <img src={background} alt="background.images" className="pageOneImg" />
      <div className="pageOneText">
        <div className="pageOneTextLeft">
          <h2>Trebaš novi telefon ili laptop?</h2>
          <h2>Ne znaš gdje da potražiš novi uređaj?</h2>
          <h2>Tu smo mi !</h2>
        </div>
        <div className="pageOneTextRight">
          <h3>Zašto TechShop?</h3>
          <p>Zato što smo najpouzdaniji.</p>
          <p>Kvalitet nam je na prvom mjestu.</p>
          <p>Veliki broj zadovoljnih klijenata.</p>
          <p>Kupovina na rate.</p>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
