import React from "react";
import mount from "../../app/mount";
import { SortDataAction, ToggleTagAction } from "../../actions";
interface IProps {
  name: string;
  index: number;
  tag: boolean;
  sortData: (index: number) => SortDataAction;
  toggleTag: (index: number) => ToggleTagAction;
}

class HeaderItem extends React.PureComponent<IProps> {
  componentDidMount() {
    mount.registerComponent("HeaderItem", this);
  }
  componentWillUnmount() {
    mount.unregisterComponent("HeaderItem", this);
  }
  public render() {
    const { name, index, sortData, toggleTag, tag } = this.props;
    var color = tag ? "#000" : "transparent";
    return (
      <div
        className="header"
        style={{
          borderLeft: index === 0 ? "1px solid #424242" : null,
          flexBasis: "230px",
          width: "230px",
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
