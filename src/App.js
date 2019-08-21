import React, { Component } from "react";
import unsplash from "./api/unsplashApi";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    images: [],
    response: false
  };

  onSearchSubmit = async term => {
    this.setState({ response: true });
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 20 }
    });

    this.setState({ images: response.data.results, response: false });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList
            images={this.state.images}
            response={this.state.response}
          />
        </div>
      </div>
    );
  }
}

export default App;
