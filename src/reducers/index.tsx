import { combineReducers } from "redux";
import { DataAction, HeaderAction } from "../actions";

const header = (state: Array<string> = [], action: HeaderAction) => {
  switch (action.type) {
    case "INIT":
      return action.initialState;
    default:
      return state;
  }
};

const data = (state: Array<JSON> = [], action: DataAction) => {
  switch (action.type) {
    case "INIT":
      return action.initialState;
    default:
      return state;
  }
};

export default combineReducers({
  header,
  data,
});
