import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { App } from "./App.jsx";
import "./scss/main.scss";
import "focus-visible";
import "./assets/images/favicon.jpg";

const root = ReactDOM.createRoot(document.getElementById("wrapper"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
