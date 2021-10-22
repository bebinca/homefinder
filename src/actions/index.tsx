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

export const shuffleData = (): shuffleDataAction => ({
  type: "SHUFFLE_DATA",
});

export interface SortDataAction {
  type: "SORT_DATA";
  index: number;
}

export const sortData = (index: number): SortDataAction => ({
  type: "SORT_DATA",
  index,
});

export type DataAction = InitDataAction | shuffleDataAction | SortDataAction;

export type MaxDataAction = {
  type: "MAX_DATA";
  data: Array<JSON>;
};

export const maxData = (data: Array<JSON>): MaxDataAction => ({
  type: "MAX_DATA",
  data,
});

export interface InitTagAction {
  type: "INIT_TAG";
  initialState: Array<string>;
}

export const initTag = (initialState: Array<string>): InitTagAction => ({
  type: "INIT_TAG",
  initialState,
});

export interface ToggleTagAction {
  type: "TOGGLE_TAG";
  index: number;
}

export const toggleTag = (index: number): ToggleTagAction => ({
  type: "TOGGLE_TAG",
  index,
});

export type TagAction = InitTagAction | ToggleTagAction;

export interface InitWidthAction {
  type: "INIT_WIDTH";
  initialState: Array<string>;
}

export const initWidth = (initialState: Array<string>): InitWidthAction => ({
  type: "INIT_WIDTH",
  initialState,
});

export interface ChangeWidthAction {
  type: "CHANGE_WIDTH";
  index: number;
  newWidth: number;
}

export const changeWidth = (
  index: number,
  newWidth: number
): ChangeWidthAction => ({
  type: "CHANGE_WIDTH",
  index,
  newWidth,
});

export type WidthAction = InitWidthAction | ChangeWidthAction;

export type ToggleResizeAction = {
  type: "TOGGLE_RESIZE";
  value: boolean;
};

export const toggleResize = (value: boolean): ToggleResizeAction => ({
  type: "TOGGLE_RESIZE",
  value,
});

export type ResizeIndexAction = {
  type: "RESIZE_INDEX";
  index: number;
};

export const resizeIndex = (index: number): ResizeIndexAction => ({
  type: "RESIZE_INDEX",
  index,
});

export type ResizeLeftAction = {
  type: "RESIZE_LEFT";
  left: number;
};

export const resizeLeft = (left: number): ResizeLeftAction => ({
  type: "RESIZE_LEFT",
  left,
});
