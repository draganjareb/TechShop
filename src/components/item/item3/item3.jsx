import "../item/item.style.css";
import Button from "../../button/Button";
import { useCartItemStore } from "../../../store/cartStore/cart";

const Item3 = ({ item }) => {
  const { addItemToOrderCart } = useCartItemStore();

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
              <p>HDD: {item.memory}</p>
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
            <Button
              label="Dodaj u korpu"
              onClickHandler={() => addItemToOrderCart(item)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item3;
