import * as actionTypes from "./actionTypes";
import api from "../services/api";
import { setAlert } from "./alert";

// add to Collection
export const addToCollection = imageData => async dispatch => {
  try {
    const res = await api.post(
      "https://nasa-collection-b906d.firebaseio.com/collection.json",
      JSON.stringify(imageData)
    );

    dispatch({
      type: actionTypes.ADD_IMAGE_TO_COLLECTION,
      payload: res.data
    });

    dispatch(setAlert("Add to collection success", "success"));
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionTypes.GET_IMAGE_ERROR,
      payload: err
    });
  }
};

// add to Collection
export const getCollection = () => async dispatch => {
  try {
    const res = await api.get(
      "https://nasa-collection-b906d.firebaseio.com/collection.json"
    );

    let keys = Object.keys(res.data);
    let collectionsData = keys.map(key =>
      Object.assign({ ...res.data[key], id: key })
    );

    dispatch({
      type: actionTypes.GET_COLLECTION,
      payload: collectionsData
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionTypes.GET_IMAGE_ERROR,
      payload: err
    });
  }
};

// delete image
export const deleteImageOnCollection = id => async dispatch => {
  try {
    const res = await api.delete(
      `https://nasa-collection-b906d.firebaseio.com/collection/${id}.json`
    );

    dispatch({
      type: actionTypes.REMOVE_IMAGE_ON_COLLECTION,
      payload: id
    });

    dispatch(setAlert("delete success", "success"));
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionTypes.GET_IMAGE_ERROR,
      payload: err
    });
  }
};

// delete image
export const updateImageOnCollection = (id, imageData) => async dispatch => {
  try {
    const res = await api.patch(
      `https://nasa-collection-b906d.firebaseio.com/collection/${id}.json`,
      JSON.stringify(imageData)
    );

    dispatch({
      type: actionTypes.UPDATE_IMAGE_ON_COLLECTION,
      payload: res.data
    });

    dispatch(setAlert("update success", "success"));
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionTypes.GET_IMAGE_ERROR,
      payload: err
    });
  }
};
