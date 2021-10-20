export interface InitHeaderAction {
  type: "INIT_HEADER";
  initialState: Array<string>;
}

export const initHeader = (initialState: Array<string>): InitHeaderAction => ({
  type: "INIT_HEADER",
  initialState,
});

export type HeaderAction = InitHeaderAction;

export interface InitDataAction {
  type: "INIT_DATA";
  initialState: Array<JSON>;
}

export const initData = (initialState: Array<JSON>): InitDataAction => ({
  type: "INIT_DATA",
  initialState,
});

export interface shuffleDataAction {
  type: "SHUFFLE_DATA";
}

export const shuffleData = (initialState: Array<JSON>): shuffleDataAction => ({
  type: "SHUFFLE_DATA",
});

export type DataAction = InitDataAction | shuffleDataAction;

export type MaxDataAction = {
  type: "MAX_DATA";
  data: Array<JSON>;
};

export const maxData = (data: Array<JSON>): MaxDataAction => ({
  type: "MAX_DATA",
  data,
});
