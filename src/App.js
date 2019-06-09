import React, { Component } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "./context/generalContext";
import Header from './components/header'
import Body from './components/body'
import "./components/style.css";

class App extends Component {

  render() {
    return (
      <Provider>
        <Router>
          <Header />
          <Body />
        </Router>
      </Provider>
    );
  }
}

export default App;
