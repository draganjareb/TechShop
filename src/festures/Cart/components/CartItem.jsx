import { useCartItemStore } from "../../../store/cartStore/cart";
import "./cartItems.style.css";
import recycleBin from "../../../assets/pictures/recycleBin.png";
import Button from "../../../components/button/Button";

const CartItem = () => {
  const {
    cart,
    removeItemFromOrderCart,
    decreaseItemQuantity,
    increaseItemQuantity,
  } = useCartItemStore();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cartItemWrapper">
      <div className="cartItemHolder">
        {cart.length ? (
          <div className="cartWrapper">
            {cart.map((item) => (
              <div className="orderCart" key={item.id}>
                <img
                  src={item.images}
                  alt="name"
                  className="cartProductPictures"
                />
                <div className="orderCartText">
                  <div className="nameAndDescription">
                    <h2>{item.tittle}</h2>
                    <h4>{item.tipe}</h4>
                  </div>
                </div>
                <div className="priceAndQuantity">
                  <h2>${item.price}</h2>
                  <div className="quantity">
                    <span onClick={() => decreaseItemQuantity(item.id)}>-</span>
                    <span>{item.quantity}</span>
                    <span onClick={() => increaseItemQuantity(item.id)}>+</span>
                  </div>
                  <img
                    src={recycleBin}
                    alt="recycleBin"
                    className="recycleBin"
                    onClick={() => removeItemFromOrderCart(item.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h2 className="noItem">Vaša korpa je prazna</h2>
        )}
      </div>
      <div className="cartItemRightSide">
        <h2 className="cartTittle">
          Vaša korpa sadrži <span>{cart.length}</span> proizvoda
        </h2>
        <hr></hr>
        <div>
          <h2>
            Ukupna cijena: <span>{total.toFixed(2)}</span> KM
          </h2>
        </div>
        <hr></hr>
        <div>
          <h2>Način plaćanja:</h2>
          <select className="optionClass">
            <option value=""></option>
            <option value="">ODMAH</option>
            <option value="">POUZEĆU</option>
          </select>
        </div>
        <div>
          <h2>Unesite vaš broj kartice:</h2>
          <input
            placeholder=" _ _ _ _ / _ _ _ _ / _ _ _ _ / _ _ _ _"
            className="creditCardData"
          />
          <h3 className="paySpan">* za kupovinu koja se plaćaja odmah</h3>
          <Button label="Kupi" />
          <div className="adressData">
            <h2>Vaša adresa:</h2>
            <input placeholder="Ulica" className="inputData" />
            <h2>Grad:</h2>
            <input placeholder="Grad" className="inputData" />
            <h2>Poštanski broj:</h2>
            <input placeholder="Poštanski broj" className="inputData" />
            <h2>Kontakt broj:</h2>
            <input placeholder="Kontakt broj" className="inputData" />
            <Button label="Pošalji" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
