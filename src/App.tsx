import React, { Component } from "react";
import { Provider } from "react-redux";

import { configureStore } from "./store/configureStore";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>aa</div>
      </Provider>
    );
  }
}

export default App;
