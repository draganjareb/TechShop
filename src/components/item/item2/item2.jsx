import "../item/item.style.css";
import Button from "../../button/Button";

const Item2 = ({ item }) => {
  return (
    <div className="itemHolder">
      <div className="item2Card">
        <div className="itemCardImages">
          <img src={item.images} alt={item.title} className="cardImages" />
        </div>
        <div className="cardData">
          <h2>{item.tittle}</h2>
          <h3>{item.tipe}</h3>
          <div className="mobileDataAndPrice">
            <div>
              <p>Rezolucija: {item.resolution}</p>
              <p>Veličina: {item.size}</p>
            </div>
          </div>
          <div>
            <h3 className="priceData">
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

export default Item2;
