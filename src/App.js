import React, { Component } from "react";
// import axios from "axios";
import SearchBar from "./components/SearchBar";

class App extends Component {
  state = {};

  onSearchSubmit = terms => {
    console.log(terms);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
