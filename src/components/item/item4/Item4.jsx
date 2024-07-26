import Button from "../../button/Button";
import "../item/item.style.css";
import { useCartItemStore } from "../../../store/cartStore/cart";

const Item4 = ({ item }) => {
  const { addItemToOrderCart } = useCartItemStore();

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
            <h3>
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

export default Item4;
