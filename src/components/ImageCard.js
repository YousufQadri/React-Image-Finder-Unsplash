import React, { Component } from "react";

class ImageCard extends Component {
  state = {
    span: ""
  };

  imageRef = React.createRef();

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const span = Math.ceil(height / 10 + 1);

    this.setState({ span });
  };

  render() {
    const { description, urls } = this.props.images;
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
