import Button from "../button/Button";
import "./item.style.css";

const Item = ({ item }) => {
  return (
    <div className="itemHolder">
      <div className="itemCard">
        <div className="itemCardImages">
          <img src={item.images} alt={item.title} className="cardImages" />
        </div>
        <div className="cardData">
          <h2>{item.tittle}</h2>
          <h3>{item.tipe}</h3>
          <div className="mobileDataAndPrice">
            <div>
              <p>RAM: {item.Ram}</p>
              <p>HDD: {item.Hdd}</p>
            </div>
            <h3>
              <i className="i">KM</i>
              <span>{item.price}</span>
            </h3>
          </div>
          <div className="buttonDiv">
            <Button label="Dodaj u korpu" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
