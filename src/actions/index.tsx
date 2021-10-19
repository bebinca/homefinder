export interface InitHeaderAction {
  type: "INIT";
  initialState: Array<string>;
}

export const init = (initialState: Array<string>): InitHeaderAction => ({
  type: "INIT",
  initialState,
});

export type HeaderAction = InitHeaderAction;
