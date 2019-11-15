import React, { useState, useEffect } from "react";
import "./ImagePopup.css";

export const ImagePopup = ({ image }) => {
  const [linkMedia, setLinkMedia] = useState("");

  useEffect(() => {
    setLinkMedia(image.linkFile);
  }, [image]);

  const renderMedia = () => {
    if (image.mediaType === "image") {
      return <img src={linkMedia} alt=""></img>;
    }

    if (image.mediaType === "video") {
      return (
        <video width="500" controls key={linkMedia}>
          <source src={linkMedia} type="video/mp4" />
        </video>
      );
    }
  };

  return (
    <div>
      <div id="open-modal" className="modal-window">
        <div>
          <a href="/#" title="Close" className="modal-close">
            X
          </a>
          {renderMedia()}
        </div>
      </div>
    </div>
  );
};
