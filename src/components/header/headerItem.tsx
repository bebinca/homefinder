import React from "react";
import mount from "../../app/mount";
import {
  ResizeIndexAction,
  ResizeLeftAction,
  SortDataAction,
  ToggleResizeAction,
  ToggleTagAction,
} from "../../actions";
import ReactDOM from "react-dom";
interface IProps {
  name: string;
  index: number;
  tag: boolean;
  width: number;
  sortData: (index: number) => SortDataAction;
  toggleTag: (index: number) => ToggleTagAction;
  toggleResize: (value: boolean) => ToggleResizeAction;
  resizeIndex: (index: number) => ResizeIndexAction;
  resizeLeft: (left: number) => ResizeLeftAction;
}

class HeaderItem extends React.PureComponent<IProps> {
  getLeft(ele) {
    if (ele === null) return;
    var clientLeft = ele.offsetLeft;
    let current = ele.offsetParent;
    while (current !== null) {
      clientLeft += current.offsetLeft;
      current = current.offsetParent;
    }
    return clientLeft;
  }
  componentDidMount() {
    mount.registerComponent("HeaderItem", this);
  }
  componentWillUnmount() {
    mount.unregisterComponent("HeaderItem", this);
  }
  public render() {
    const {
      name,
      index,
      sortData,
      toggleTag,
      toggleResize,
      resizeIndex,
      resizeLeft,
      tag,
      width,
    } = this.props;
    var color = tag ? "#000" : "transparent";
    var displayWidth = (width ? width.toString() : "230") + "px";
    return (
      <div
        className="header"
        style={{
          borderLeft: index === 0 ? "1px solid #424242" : null,
          flexBasis: displayWidth,
          width: displayWidth,
          padding: "7px 7px 6px 5px",
          backgroundColor: color,
          position: "relative",
        }}
        onClick={() => sortData(index)}
        onContextMenu={() => {
          toggleTag(index);
          mount.refreshComponent("Header");
          mount.refreshComponent("CandidateList");
        }}
      >
        <div className="name" style={{ color: "#fff" }}>
          {name}
        </div>
        <div
          onMouseDown={() => {
            resizeIndex(index);
            resizeLeft(this.getLeft(ReactDOM.findDOMNode(this)));
            toggleResize(true);
          }}
          draggable={false}
          className="resizer"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
            width: "1px",
            borderLeft: "5px solid transparent",
            borderRight: "1px solid #424242",
            backgroundClip: "padding-box",
            cursor: "ew-resize",
          }}
        ></div>
      </div>
    );
  }
}

export default HeaderItem;
