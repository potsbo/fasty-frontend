import React from "react";
import { useStore } from "react-redux";

import "./App.css";

const App: React.FC = () => {
  const store = useStore();
  return <div>{store.getState().sample}</div>;
};

export default App;
