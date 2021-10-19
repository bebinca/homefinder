export interface InitHeaderAction {
  type: "INIT";
  initialState: Array<string>;
}

export const initHeader = (initialState: Array<string>): InitHeaderAction => ({
  type: "INIT",
  initialState,
});

export type HeaderAction = InitHeaderAction;

export interface InitDataAction {
  type: "INIT";
  initialState: Array<JSON>;
}

export const initData = (initialState: Array<JSON>): InitDataAction => ({
  type: "INIT",
  initialState,
});

export type DataAction = InitDataAction;
