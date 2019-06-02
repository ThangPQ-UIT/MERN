import React, { Component } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { CartProvider } from "./context/cart-context";
import Header from './components/header'
import Body from './components/body'
import "./components/style.css";

class App extends Component {

  render() {
    return (
      <CartProvider>
        <Router>
          <Header />
          <Body />
        </Router>
      </CartProvider>
    );
  }
}

export default App;
