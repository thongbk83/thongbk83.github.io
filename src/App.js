import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Collections from "./components/Collections/Collections";
import SearchImage from "./components/SearchImage/SearchImage";
import Alert from "./components/Layout/Alert";
import store from "./store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Alert />
      <Router>
        <Fragment>
          <Route exact path="/" component={Collections}></Route>
          <Route path="/search" component={SearchImage}></Route>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
