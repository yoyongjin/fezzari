import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import MainHeader from "./components/Header/MainHeader";
import Myzzari from "./components/Info/Myzzari";
import CafeNavigation from "./components/nav/CafeNavigation";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Fragment>
      <MainHeader />
      {/* <LoginPage /> */}

      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/reservation">
          <CafeNavigation />
        </Route>
        <Route path="/myzzari">
          <Myzzari />
        </Route>
        <Route to="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
