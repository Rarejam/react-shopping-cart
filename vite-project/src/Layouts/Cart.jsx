import { useContext, useMemo, useState } from "react";
import { ShopContext } from "./ShopContext";
import { Link } from "react-router-dom";
const Cart = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const {
    cartItems,
    removeItem,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
  } = useContext(ShopContext);
  console.log(cartItems.length);

  useMemo(() => {
    const totalItems = cartItems.reduce(
      (sum, items) => sum + items.quantity,
      0
    );
    setTotalItems(totalItems);

    const totalPrice =
      Math.round(
        cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) *
          100
      ) / 100;
    setTotalPrice(totalPrice);
  }, [cartItems]);

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          fontSize: "48px",
          display: "flex",
          fontFamily: "cursive",
          justifyContent: "start",
          marginLeft: "50px",
          marginRight: "50px",
          borderBottom: "1px solid",
        }}
      >
        Cart
      </div>

      <div className="cart-container">
        <div>
          <div>
            {cartItems.length === 0 ? (
              <h3>No items in the cart</h3>
            ) : (
              cartItems.map((item) => {
                return (
                  <div className="cart-item">
                    {/* <div className="cart-image-container"> */}
                    <div
                      className="cart-image"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      {" "}
                    </div>
                    <div>
                      {/* <div> */}
                      <div className="cart-name">
                        <div>title: {item.title}</div>
                        <div>Price: ${item.price}</div>
                        <div>quantity: {item.quantity}</div>
                      </div>

                      <div className="cart-button">
                        <button onClick={() => decreaseQuantity(item)}>
                          decrease
                        </button>
                        <button onClick={() => removeItem(item)}>Remove</button>
                        <button onClick={() => increaseQuantity(item)}>
                          increase
                        </button>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="cart-checkout-div">
            <div>
              <div>
                <div>Total Items: {totalItems}</div>
                <div>Total Price: ${totalPrice}</div>
              </div>
              <div className="btn-divs">
                <button onClick={() => clearCart()}>Clear cart</button>

                <Link to="/shop/checkout">
                  <button>checkout</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
