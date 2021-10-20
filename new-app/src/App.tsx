import React, { memo } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "./redux/store";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  // const dispatch = useDispatch();
  // const isAuthenticated = useSelector(
  //   (state: IRootState) => state.auth.isAuthenticated
  // );
  // console.log(isAuthenticated);

  return (
    <div className="App">
      {/* {isAuthenticated === null && <h1>loading...</h1>} */}
      {/* {isAuthenticated !== null && ( */}
      {/* <Switch> */}
      {/* <Route path="/login" exact={true} component={LoginPage} /> */}
      {/* <Route path="/" exact={true} component={MainPage} />
        <Route component={NotFoundPage} />
      </Switch> */}
      {/* )} */}
      <MainPage />
    </div>
  );
}

export default memo(App);
