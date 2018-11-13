import React from "react";
import "./App.less";
import Header from "./Header/Header.js";
import FloorPlan from "./FloorPlan/FloorPlan";
import FAQ from "./FAQ/FAQ";
import Contact from "./Contact/Contact";
import NavBar from "./NavBar/NavBar";
import Filter from "./Filter/Filter";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Filter />
        <FloorPlan />
        <FAQ />
        <Contact />
      </div>
    );
  }
}
