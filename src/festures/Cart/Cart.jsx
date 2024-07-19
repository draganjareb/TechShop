
import "../Cart/cart.style.css";
import CartItem from "./components/CartItem";

const Cart = () => {


  return (
    <div className="cartWrapper">
      <div className="cartHolder">
        <h1>Vaša korpa</h1>
        <CartItem />
      </div>
    </div>
  );
};

export default Cart;
