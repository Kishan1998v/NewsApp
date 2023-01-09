import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    let urls =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6c2b4a7346ba446ea41607ed13c2612a";

    return (
      <div>
        <div className="container text-center ml-" style={{ zIndex: 2 }}>
          <h1>NewsEagel</h1>
          <p>The latest news from around the world</p>
          <h4 className="border border-bottom "></h4>
        </div>
        <Navbar />
        <News urls={urls} />
      </div>
    );
  }
}
