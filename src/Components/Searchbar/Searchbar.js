import React, { Component } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import axios from "axios";
import Button from "../Button/Button";

export default class Searchbar extends Component {
  state = {
    searchText: "",
    apiUrl: "https://pixabay.com/api",
    apiKey: "17140090-8e72979244da9bcaf046d5df2",
    images: [],
    perPage: 12,
    page: 1,
    query: "",
    isLoading: false,
  };

  loaderToggle = () => {
    this.setState((prevstate) => ({
      isLoading: !prevstate.isLoading,
    }));
  };

  onTextChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  getPics = (e) => {
    e.preventDefault();
    this.setState({
      query: this.state.searchText,
      page: 1,
      searchText: "",
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchPics();
    }
  }

  getResults = async (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      this.setState({ images: [] });
    } else {
      try {
        this.loaderToggle();
        const result = await axios.get(
          `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&page=${this.state.page}&image_type=photo&per_page=${this.state.perPage}&safesearch=false`
        );
        this.setState({ images: result.data.hits, page: 2 });
      } catch (error) {
        console.log(error);
      } finally {
        this.loaderToggle();
      }
    }
  };

  fetchPics = async () => {
    try {
      this.loaderToggle();
      const result = await axios.get(
        `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&page=${this.state.page}&image_type=photo&per_page=${this.state.perPage}&safesearch=false`
      );
      this.setState((prevState) => ({
        images: [...prevState.images, ...result.data.hits],
        page: prevState.page + 1,
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.loaderToggle();
    }
  };

  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.getResults}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label"></span>
            </button>
            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.searchText}
              onChange={this.onTextChange}
              name="searchText"
            />
          </form>
        </header>
        {this.state.images.length > 0 ? (
          <ImageGallery
            images={this.state.images}
            isLoading={this.state.isLoading}
          />
        ) : null}
        {this.state.images.length > 0 ? (
          <Button fetchPics={this.fetchPics} />
        ) : null}
      </>
    );
  }
}
