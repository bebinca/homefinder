import React from "react";
import HeaderItem from "./headerItem";
import mount from "../../app/mount";
import { SortDataAction, ToggleTagAction } from "../../actions";

interface IProps {
  state: any;
  sortData: (index: number) => SortDataAction;
  toggleTag: (index: number) => ToggleTagAction;
}
class Header extends React.PureComponent<IProps> {
  componentDidMount() {
    mount.registerComponent("Header", this);
  }
  componentWillUnmount() {
    mount.unregisterComponent("Header", this);
  }
  public render() {
    const { state, sortData, toggleTag } = this.props;
    let headers: Array<string> = state.header;
    let tags: Array<boolean> = state.tag;
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
        onContextMenu={(e) => e.preventDefault()}
      >
        {headers.map((header: any, index: number) => (
          <HeaderItem
            key={header}
            name={header}
            index={index}
            sortData={sortData}
            toggleTag={toggleTag}
            tag={tags[index]}
          />
        ))}
      </div>
    );
  }
}
export default Header;
