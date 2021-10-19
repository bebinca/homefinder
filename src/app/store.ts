import { createStore } from "redux";
import { init } from "../actions";
import rootReducer from "../reducers";
import { IStoreState } from "../types";
import { fetchCsvData } from "./api";
const store = createStore(rootReducer);
export default store;