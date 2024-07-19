import { useCartItemStore } from "../../../store/cartStore/cart";
import "./cartItems.style.css";
import recycleBin from "../../../assets/pictures/recycleBin.png";

const CartItem = () => {
  const {
    cart,
    clearOrderCart,
    decreaseItemQuantity,
    removeItemFromCart,
    increaseItemQuantity,
  } = useCartItemStore();

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
                    onClick={() => removeItemFromCart(item)}
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
        <h2>
          Vaša korpa sadrži <span>{cart.length}</span> proizvoda
        </h2>
      </div>
    </div>
  );
};

export default CartItem;
