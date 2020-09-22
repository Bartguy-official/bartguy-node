import { combineReducers } from "redux";
import uploadProduct from "./uploadProduct";
import Pages from "./pages";

export default combineReducers({
  uploadProduct: uploadProduct,
  pages: Pages,
});
