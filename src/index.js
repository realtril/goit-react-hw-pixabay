import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Searchbar from "./Components/Searchbar/Searchbar";

ReactDOM.render(
  <React.StrictMode>
    <Searchbar />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
