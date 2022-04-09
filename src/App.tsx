import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import "./theme/global.scss";
function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
    </Fragment>
  );
}

export default App;
