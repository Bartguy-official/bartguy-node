import { produce } from "immer";
import * as types from "../actions/types";

const initialState = {
  pageData: [],
  pageName: "",
};

export default function (state = initialState, action) {
  let nextState;
  switch (action.type) {
    case types.GET_PAGE_DATA:
      nextState = produce(state, (draft) => {
        draft.pageData = action.pageData;
        draft.pageName = action.pageName;
      });
      break;
    default:
      return state;
  }
  return nextState;
}
