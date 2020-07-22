import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import Spinner from "../Loader/Loader";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class ImageGallery extends Component {
  state = {
    open: false,
    largeImageURL: "",
  };

  setLargeImg = (e) => {
    this.setState({ largeImageURL: e });
  };

  render() {
    let imageListContent;
    const { images } = this.props;
    return (
      <>
        {this.props.isLoading ? (
          <Spinner />
        ) : (
          <ul className="ImageGallery">
            {images
              ? (imageListContent = images.map((image) => (
                  <ImageGalleryItem
                    image={image.webformatURL}
                    title={image.title}
                    largePic={image.largeImageURL}
                    setLargeImg={this.setLargeImg}
                    key={image.id}
                  />
                )))
              : (imageListContent = null)}
          </ul>
        )}

        {this.state.largeImageURL && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            state={this.state}
            setLargeImg={this.setLargeImg}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
