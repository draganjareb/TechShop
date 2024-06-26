import "../styles/pageFour.style.css";
import dinners from "../../../assets/pictures/dinnersClub.jpg";
import americanExpress from "../../../assets/pictures/amaricanExpress.png";
import paypal from "../../../assets/pictures/paypal.png";
import visaLogo from "../../../assets/pictures/visaLogo.png";
import viza from "../../../assets/pictures/viza.jpeg";
import face from "../../../assets/pictures/face.png";
import insta from "../../../assets/pictures/insta.png";
import linked from "../../../assets/pictures/linked.png";

const PageFour = () => {
  return (
    <div className="fourPageWrapper">
      <div className="fourPageHolder">
        <div className="fourPageData">
          <h3>Korisnička podrška</h3>
          <p>Načini plaćanja</p>
          <p>Načini dostave</p>
          <p>Uslovi korištenja</p>
          <p>Podrška</p>
        </div>
        <div className="fourPageData">
          <h3>Web Shop</h3>
          <p>Promocije</p>
          <p>Novosti</p>
          <p>Blog</p>
        </div>
        <div className="fourPageData">
          <h3>Načinin plaćanja</h3>
          <div className="creditCard">
            <div className="creditCards">
              <img src={dinners} alt="card" />
              <img src={americanExpress} alt="card" />
            </div>
            <div className="creditCards2">
              <img src={paypal} alt="card" />
              <img src={visaLogo} alt="card" />
              <img src={viza} alt="card" />
            </div>
          </div>
        </div>
        <div className="fourPageData">
          <h3>Pratite nas</h3>
          <div className="logoss">
            <img src={face} alt="face" />
            <img src={insta} alt="instagram" />
            <img src={linked} alt="linked" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFour;
