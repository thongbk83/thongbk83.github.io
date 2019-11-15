import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateImageOnCollection } from "../../actions/collection";
import "./EditImagePopup.css";

const EditImagePopup = ({ image, updateImageOnCollection }) => {
  const [formData, setFormData] = useState({
    id: "",
    like: false,
    title: "",
    description: "",
    mediaType: "",
    linkPreview: "",
    linkFile: ""
  });

  useEffect(() => {
    setFormData({
      id: !image.id ? "" : image.id,
      like: !image.like ? false : image.like,
      title: !image.title ? "" : image.title,
      description: !image.description ? "" : image.description,
      mediaType: !image.mediaType ? "image" : image.mediaType,
      linkPreview: !image.linkPreview ? "" : image.linkPreview,
      linkFile: !image.linkFile ? "" : image.linkFile
    });
  }, [image]);

  const { title, description, mediaType, linkPreview, linkFile } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="open-EditModal" class="modal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-header">
          <h2>Edit</h2>
          <a href="/#" class="btn-close" aria-hidden="true">
            ×
          </a>
        </div>
        <div class="modal-body">
          <form className="form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="form-group">
              <textarea
                placeholder="Description"
                name="description"
                value={description}
                onChange={e => onChange(e)}
                rows="5"
              />
            </div>

            <div className="form-group">
              <select
                name="mediaType"
                value={mediaType}
                onChange={e => onChange(e)}
              >
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Link preview image url"
                name="linkPreview"
                value={linkPreview}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Website"
                name="linkFile"
                value={linkFile}
                onChange={e => onChange(e)}
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <a
            href="/#"
            class="btn"
            onClick={() => updateImageOnCollection(image.id, formData)}
          >
            Save
          </a>
          <a href="/#" class="btn">
            Cancel
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { updateImageOnCollection })(EditImagePopup);
