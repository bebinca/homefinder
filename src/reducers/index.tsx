import { combineReducers } from "redux";
import {
  DataAction,
  HeaderAction,
  MaxDataAction,
  TagAction,
  WidthAction,
  ToggleResizeAction,
  ResizeIndexAction,
  ResizeLeftAction,
  WeightAction,
  MaxSelectedAction,
} from "../actions";
import sortArray from "../components/helpers/sortArray";

// header: Array<string>, name of each header
const header = (state: Array<string> = [], action: HeaderAction) => {
  switch (action.type) {
    case "INIT_HEADER":
      return action.initialState;
    default:
      return state;
  }
};

// tag: Array<boolean>, record whether the column is tagged or not
const tag = (state: Array<boolean> = [], action: TagAction) => {
  switch (action.type) {
    case "INIT_TAG":
      let x: any;
      let res: Array<boolean> = [];
      // eslint-disable-next-line
      for (x in action.initialState) {
        res.push(false);
      }
      return res;
    case "TOGGLE_TAG":
      if (state[action.index] === false) state[action.index] = true;
      else state[action.index] = false;
      return state;
    default:
      return state;
  }
};


// data: Array<JSON>, the main data list
const data = (state: Array<JSON> = [], action: DataAction) => {
  switch (action.type) {
    case "INIT_DATA":
      return action.initialState;
    case "SORT_DATA":
      let weight = action.newWeight;
      let newState1 = sortArray(state,weight);
      return newState1;
    default:
      return state;
  }
};

// isResize: boolean, record whether the user is changing header width or not
const isResize = (state: boolean = false, action: ToggleResizeAction) => {
  switch (action.type) {
    case "TOGGLE_RESIZE":
      return action.value;
    default:
      return state;
  }
};

// ResizingIndex: number, record which header is changed width
const resizingIndex = (state: number = 0, action: ResizeIndexAction) => {
  switch (action.type) {
    case "RESIZE_INDEX":
      return action.index;
    default:
      return state;
  }
};

// ResizingLeft: number, record the position of the header that is changed width
const resizingLeft = (state: number = 0, action: ResizeLeftAction) => {
  switch (action.type) {
    case "RESIZE_LEFT":
      return action.left;
    default:
      return state;
  }
};

// widthList: Array<number>, record the width of every column
const widthList = (state: Array<number> = [], action: WidthAction) => {
  switch (action.type) {
    case "INIT_WIDTH":
      let x: any;
      let res: Array<number> = [];
      // eslint-disable-next-line
      for (x in action.initialState) {
        res.push(230);
      }
      return res;
    case "CHANGE_WIDTH":
      let index = action.index;
      let newList = state;
      newList[index] = action.newWidth;
      return newList;
    default:
      return state;
  }
};

// maxData: Array<number>, record the max data of each column
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

// weights: Array<number>, weight of each header
const weight = (state: Array<number> = [], action: WeightAction) => {
  switch (action.type) {
    case "INIT_WEIGHT":
      return action.initialState;
    case "CHANGE_WEIGHT":
      let index = action.index;
      let newList = state;
      if(state[index]>0)
        newList[index] = 0;
      else
        newList[index] = action.newWeight;
      return newList;
    default:
      return state;
  }
};

// maxSelectedData: number, record the max data of Selected column
const maxSelectedData = (state: number = 0, action: MaxSelectedAction) => {
  switch (action.type) {
    case "INIT_MAX_SELECTED":
      return action.initialState;
    case "CHANGE_MAX_SELECTED":
      let res: number = 0;
      let item: any;
      let weight = action.weight
      for (item of action.data) {
        let x: any;
        let i: number = 0;
        let max=0;
        for (x in item) {
          i = i + 1;
          if (i > 2) {
            let temp: number = Number(item[x]);
            let index: number = i - 3;
            max+=weight[index]*temp;
          }
        }
        if(max>res) res=max;
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
  tag,
  isResize,
  widthList,
  resizingIndex,
  resizingLeft,
  weight,
  maxSelectedData,
});
