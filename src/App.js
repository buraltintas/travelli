import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Select from "./components/Select/Select";

function App() {
  return (
    <div>
      <Route path="/">
        <Redirect to="/home" />
        <Header />
      </Route>
      <Route path="/home">
        <Main />
        <Footer />
      </Route>
      <Route path="/select">
        <Select />
        <Footer />
      </Route>
    </div>
  );
}

export default App;
