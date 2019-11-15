import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../Layout/Spinner";
import {
  getCollection,
  deleteImageOnCollection,
  updateImageOnCollection
} from "../../actions/collection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

import { ImagePopup } from "../Image/ImagePopup";
import EditImagePopup from "../Image/EditImagePopup";

import "./Collections.css";

export const Collections = ({
  collection: { collections, loading },
  getCollection,
  deleteImageOnCollection,
  updateImageOnCollection
}) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [filterType, setFilterType] = useState("image");

  useEffect(() => {
    getCollection();
  }, [getCollection]);

  const onClickLikeButtonHandler = image => {
    image.like = !image.like;
    updateImageOnCollection(image.id, image);
  };

  const renderImages = () => {
    return (
      <div className="image-grid" style={{ marginTop: "30px" }}>
        {collections
          .filter(
            image => image.mediaType === filterType || filterType === "both"
          )
          .map((image, index) => (
            <div className="image-item tooltip" key={index}>
              <a href="#open-modal" onClick={() => setSelectedImage(image)}>
                <img src={image.linkPreview} alt="" />
              </a>
              <div className={(index + 1) % 3 === 0 ? "left" : "right"}>
                <h3>{image.title}</h3>
                <p>{image.description}</p>
                <h4>(Click on image for detail)</h4>
                <i></i>
              </div>

              <ul>
                <button
                  className="utilityButon"
                  onClick={() => onClickLikeButtonHandler(image)}
                >
                  <FontAwesomeIcon
                    icon={image.like ? faHeart : faRegularHeart}
                    color={image.like ? "red" : "black"}
                  />
                </button>
                <button
                  className="utilityButon"
                  onClick={() => deleteImageOnCollection(image.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <a
                  href="#open-EditModal"
                  className="utilityButon"
                  onClick={() => setSelectedImage(image)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </a>
              </ul>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div class="home-grid">
      <div className="headerDiv">
        <h1>Collections</h1>
        <Link to="/search">
          <button className="headerButton" type="button">
            Add New Item
          </button>
        </Link>
      </div>

      <div className="headerDiv">
        <div>
          <label htmlFor="selectMediaType" style={{ color: "white" }}>
            Filter By:{" "}
          </label>
          <select
            id="selectMediaType"
            name="mediaType"
            value={filterType}
            onChange={e => setFilterType(e.target.value)}
          >
            <option value="image">Image</option>
            <option value="video">Video</option>
            <option value="both">Both</option>
          </select>
        </div>
      </div>

      <Fragment>
        {loading ? <Spinner /> : <Fragment>{renderImages()}</Fragment>}
        <ImagePopup image={selectedImage}></ImagePopup>
        <EditImagePopup image={selectedImage}></EditImagePopup>
      </Fragment>
    </div>
  );
};

const mapStateToProps = state => ({
  collection: state.collection
});

export default connect(mapStateToProps, {
  getCollection,
  deleteImageOnCollection,
  updateImageOnCollection
})(Collections);
