import { combineReducers } from "redux";
import nasaImage from "./nasaImage";
import collection from "./collection";
import alert from "./alert";

export default combineReducers({
  alert,
  nasaImage,
  collection
});
