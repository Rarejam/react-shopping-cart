const Checkout = () => {
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form className="checkout-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="john@example.com" required />
        </div>

        <div className="form-group">
          <label>Shipping Address</label>
          <input type="text" placeholder="123 Main St" required />
        </div>

        <div className="form-group">
          <label>City</label>
          <input type="text" placeholder="Lagos" required />
        </div>

        <div className="form-group">
          <label>Payment Method</label>
          <select>
            <option>Credit Card</option>
            <option>PayPal</option>
            <option>Bank Transfer</option>
          </select>
        </div>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
