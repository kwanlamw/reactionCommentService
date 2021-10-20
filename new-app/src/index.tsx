import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store, { history } from "./redux/store";
import { ConnectedRouter } from "connected-react-router";

// import { MuiPickersUtilsProvider } from "@material-ui/pickers";
// import "date-fns";
// import DateFnsUtils from "@date-io/date-fns";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ConnectedRouter history={history}> */}
      {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
      <App />
      {/* </MuiPickersUtilsProvider> */}
      {/* </ConnectedRouter> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
