import React from "react";
import HeaderItem from "./headerItem";
import mount from "../../app/mount";
import {
  SortDataAction,
  ToggleTagAction,
  ToggleResizeAction,
  ResizeIndexAction,
  ResizeLeftAction,
  ChangeWidthAction,
} from "../../actions";
import store from "../../app/store";

interface IProps {
  state: any;
  sortData: (index: number) => SortDataAction;
  toggleTag: (index: number) => ToggleTagAction;
  toggleResize: (value: boolean) => ToggleResizeAction;
  resizeIndex: (index: number) => ResizeIndexAction;
  resizeLeft: (left: number) => ResizeLeftAction;
  changeWidth: (index: number, newWidth: number) => ChangeWidthAction;
}
class Header extends React.PureComponent<IProps> {
  componentDidMount() {
    mount.registerComponent("Header", this);
  }
  componentWillUnmount() {
    mount.unregisterComponent("Header", this);
  }
  public render() {
    const {
      state,
      sortData,
      toggleTag,
      toggleResize,
      resizeIndex,
      resizeLeft,
      changeWidth,
    } = this.props;
    let headers: Array<string> = state.header;
    let tags: Array<boolean> = state.tag;
    let widths: Array<number> = state.widthList;
    return (
      <div
        className="lineup-wrapper"
        style={{
          flex: "0 0",
          height: "50px",
          paddingLeft: "150px",
          flexDirection: "row",
          borderBottom: "1px solid #424242",
          backgroundColor: "#212121",
          position: "relative",
          overflow: "hidden",
          display: "flex",
        }}
        onContextMenu={(e) => {
          e.preventDefault();
        }}
        onMouseUp={() => {
          toggleResize(false);
          console.log(store.getState());
          mount.refreshComponent("Header");
        }}
        onMouseMove={(e) => {
          if (store.getState().isResize) {
            let index = store.getState().ResizingIndex;
            let left = store.getState().ResizingLeft;
            let newWidth = e.clientX - left - 12;
            changeWidth(index, newWidth);
            mount.refreshComponent("Header");
            mount.refreshComponent("CandidateList");
          }
        }}
      >
        {headers.map((header: any, index: number) => (
          <HeaderItem
            ref={header}
            key={header}
            name={header}
            index={index}
            sortData={sortData}
            toggleTag={toggleTag}
            toggleResize={toggleResize}
            resizeIndex={resizeIndex}
            resizeLeft={resizeLeft}
            tag={tags[index]}
            width={widths[index] ? widths[index] : 230}
          />
        ))}
      </div>
    );
  }
}
export default Header;
