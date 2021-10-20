import { combineReducers } from "redux";
import { DataAction, HeaderAction, MaxDataAction } from "../actions";
import shuffleArray from "../components/helpers/shuffleArray";

const header = (state: Array<string> = [], action: HeaderAction) => {
  switch (action.type) {
    case "INIT_HEADER":
      return action.initialState;
    default:
      return state;
  }
};

const data = (state: Array<JSON> = [], action: DataAction) => {
  switch (action.type) {
    case "INIT_DATA":
      return action.initialState;
    case "SHUFFLE_DATA":
      let newState = shuffleArray(state);
      return newState;
    default:
      return state;
  }
};

const maxData = (state: Array<number> = [], action: MaxDataAction) => {
  switch (action.type) {
    case "MAX_DATA":
      let res: Array<number> = [];
      let item: any;
      for (item of action.data) {
        let x: any;
        let i: number = 0;
        for (x in item) {
          i = i + 1;
          if (i > 2) {
            let temp: number = Number(item[x]);
            let index: number = i - 3;
            if (res.length - 1 < index) {
              res.push(temp);
            } else {
              if (temp > res[index]) res[index] = temp;
            }
          }
        }
      }
      return res;
    default:
      return state;
  }
};

export default combineReducers({
  header,
  data,
  maxData,
});
