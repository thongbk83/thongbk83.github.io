import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

import Spinner from "../Layout/Spinner";
import { searchImage } from "../../actions/nasaImage";
import { addToCollection } from "../../actions/collection";
import { ImagePopup } from "../Image/ImagePopup";
import "./SearchImage.css";

export const SearchImage = ({
  searchImage,
  addToCollection,
  images: { images }
}) => {
  const [keyword, setKeyword] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isImage, setIsImage] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    setIsSearching(false);
  }, [images]);

  const handleSubmit = e => {
    e.preventDefault();

    setIsSearching(true);
    searchImage(keyword, isImage, isVideo);
  };

  const renderImages = () => {
    if (isSearching && images && images.length === 0) {
      return (
        <p className="Search-errorMessage">
          Ooops, we haven't found anything, please search with other term.
        </p>
      );
    } else {
      return (
        <Fragment>
          {keyword && isSearching ? (
            <h3>
              {images.length} results for {keyword}
            </h3>
          ) : (
            ""
          )}

          <div className="image-grid" style={{ marginTop: "30px" }}>
            {images.map((image, index) => (
              <div className="image-item tooltip" key={index}>
                <a href="#open-modal" onClick={() => setSelectedImage(image)}>
                  <img src={image.linkPreview} alt="" />
                </a>
                <div class={(index + 1) % 3 === 0 ? "left" : "right"}>
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                  <h4>(Click on image for detail)</h4>
                  <i></i>
                </div>
                <button
                  className="myButton"
                  onClick={() => addToCollection(image)}
                >
                  <FontAwesomeIcon icon={faPlus} color="black" />
                  {"  "}Add To Collection
                </button>
              </div>
            ))}
          </div>
        </Fragment>
      );
    }
  };

  return (
    <div class="home-grid">
      <div className="headerDiv">
        <h1>Search From Nasa</h1>
        <Link to="/">
          <button className="headerButton" type="button">
            Back To Collection
          </button>
        </Link>
      </div>
      <form className="SearchBox" onSubmit={handleSubmit.bind(this)}>
        <input
          value={keyword}
          className="SearchBox-input"
          placeholder="Search the space..."
          onChange={e => setKeyword(e.target.value)}
        />
        <button type="submit" className="SearchBox-submitButton">
          <FontAwesomeIcon icon={faSearch} color="gray" size="2x" />
        </button>

        <label class="checkbox">
          <input
            type="checkbox"
            value={isImage}
            onChange={() => setIsImage(!isImage)}
          />
          <span>Image</span>
        </label>
        <label class="checkbox">
          <input
            type="checkbox"
            value={isVideo}
            onChange={() => setIsVideo(!isVideo)}
          />
          <span>Video</span>
        </label>
      </form>

      <div>{isSearching ? <Spinner /> : renderImages()}</div>
      <ImagePopup image={selectedImage}></ImagePopup>
    </div>
  );
};

const mapStateToProps = state => ({
  images: state.nasaImage
});

export default connect(mapStateToProps, { searchImage, addToCollection })(
  SearchImage
);
