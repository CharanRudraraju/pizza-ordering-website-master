import React, { Component } from "react";
import pizzas from "../server/pizzas.json";

class Home extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      order: {
        quantity: [],
        price: [],
        totalPrice: 0,
      },
    };
    this.state = this.initialState;
  }

  handleClick = () => {
    this.props.history.push({
      pathname: "/Cart",
      state: this.state.order,
    });
  };

  render() {
    let context = this;

    function removeItem(name, price) {
      let newQuantity = context.state.order.quantity;
      let newPrice = context.state.order.price;
      if (newQuantity[name] > 0) {
        newQuantity[name] = newQuantity[name] - 1;
        newPrice[name] = newPrice[name] - price;
        context.state.order.totalPrice -= price;
      }
      context.setState({ quantity: newQuantity, price: newPrice });
    }

    function selectItem(name, price) {
      let newQuantity = context.state.order.quantity;
      let newPrice = context.state.order.price;

      newQuantity[name] = newQuantity[name] + 1;
      newPrice[name] = newPrice[name] + price;

      context.state.order.totalPrice += price;
      context.setState({ quantity: newQuantity });
    }

    function adjust(name) {
      let newQuantity = context.state.order.quantity;
      let newPrice = context.state.order.price;

      if (isNaN(newQuantity[name])) {
        newQuantity[name] = 0;
        newPrice[name] = 0;
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Express Pizza Menu</h1>
          <div className="Order-menu">
            <table>
              <tbody>
                <tr>
                  <th>
                    <label className="menu-name">Pizza</label>
                    <label className="menu-ingredient">(Ingredients)</label>
                  </th>
                  <th>
                    <label className="menu-price">Price</label>
                  </th>
                  <th></th>
                  <th></th>
                  <th>Qnt.</th>
                </tr>

                {pizzas.map((data) => {
                  adjust(data.name);

                  return (
                    <tr key={data.name}>
                      <td>
                        <label className="menu-name">{data.name}</label>
                        <label className="menu-ingredient">
                          ({data.ingredients.join(", ")})
                        </label>
                      </td>
                      <td>
                        <label className="menu-price">$ {data.price}</label>
                      </td>
                      <td>
                        <button
                          className="menu-select"
                          onClick={() => selectItem(data.name, data.price)}
                        >
                          Select
                        </button>
                      </td>
                      <td>
                        <button
                          className="menu-remove"
                          onClick={() => removeItem(data.name, data.price)}
                        >
                          Remove
                        </button>
                      </td>
                      <td>
                        <label className="menu-quantity"></label>X{" "}
                        {this.state.order.quantity[data.name]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button className="menu-cart" onClick={() => this.handleClick()}>
              CART &rarr; Total (${this.state.order.totalPrice})
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
