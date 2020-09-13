import { combineReducers } from "redux";
import uploadProduct from "./uploadProduct";

export default combineReducers({
  uploadProduct: uploadProduct,
});
