import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Screens/Home";
import Cart from "./Components/Screens/Cart";
import Checkout from "./Components/Screens/Checkout";
import "./Components/Styles/Cart.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Cart" component={Cart}></Route>
          <Route path="/Checkout" component={Checkout}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
