import React, { Component } from "react";
import { Link } from "react-router-dom";
import order from "../server/order.json";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: { order },
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <button className="go-back">&larr; Menu</button>
          </Link>
          <h1>CheckOut</h1>
          <div className="Checkout-page">
            <div className="order-message">
              Order Success!
              <br />
              Your order will be delivered in{" "}
              {this.state.items.order.deliveryTime} minutes.
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Checkout;
