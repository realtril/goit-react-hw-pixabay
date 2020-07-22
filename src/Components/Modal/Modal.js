import React, { Component } from "react";

export default class Modal extends Component {
  escFunction = (event) => {
    if (event.key === "Escape") {
      this.props.setLargeImg(null);
    }
  };
  closeModalByClick = (e) => {
    if (e.target.nodeName === "DIV") this.props.setLargeImg(null);
  };
  componentDidMount() {
    window.addEventListener("keydown", this.escFunction);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.escFunction);
  }

  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
