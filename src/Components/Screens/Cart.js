import React, { Component } from "react";
import pizzas from "../server/pizzas.json";
import { Link } from "react-router-dom";

class Cart extends Component {
  render() {
    let orders = this.props.location.state;
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <button className="go-back">&larr; Menu</button>
          </Link>
          <h1>Cart</h1>
          <div className="Order-cart">
            <table>
              <tbody>
                <tr>
                  <th>
                    <label className="menu-name">Pizza</label>
                    <label className="menu-ingredient">(Ingredients)</label>
                  </th>
                  <th>Qnt.</th>
                  <th>
                    <label className="menu-price">Price</label>
                  </th>
                </tr>
                {pizzas.map((data) => {
                  if (orders.quantity[data.name] > 0) {
                    return (
                      <tr key={data.name}>
                        <td>
                          <label className="menu-name">{data.name}</label>
                          <label className="menu-ingredient">
                            ({data.ingredients.join(", ")})
                          </label>
                        </td>
                        <td>
                          <label className="menu-quantity"></label>X{" "}
                          {orders.quantity[data.name]}
                        </td>
                        <td>
                          <label className="menu-price">
                            $ {orders.price[data.name]}
                          </label>
                        </td>
                      </tr>
                    );
                  } else return false;
                })}
              </tbody>
            </table>

            <hr></hr>
            <div className="totalPrice">
              <label>Total = ${orders.totalPrice}</label>
            </div>
            <Link to="/Checkout">
              <button className="menu-cart">CONFIRM &rarr;</button>
            </Link>
          </div>
        </header>
      </div>
    );
  }
}

export default Cart;
