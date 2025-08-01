import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "./ShopContext";
const Header = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="header">
      <div className="header-text">
        <div>Jam-Mart</div>
        <div></div>
        <Link to="cart">
          <div>
            <button style={{ backgroundColor: "wheat" }} className="cart-svg">
              {/* <img src='cart.svg' /> */}
              <div className="cart-value">{cartItems.length}</div>
            </button>
          </div>
        </Link>
      </div>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Header;
