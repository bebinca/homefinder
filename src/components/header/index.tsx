import React, { Component } from "react";
import store from "../../app/store";
import HeaderItem from "./headerItem";

interface IProps {
  state: any;
}
class Header extends React.PureComponent<IProps> {
  public render() {
    const { state } = this.props;
    let headers: Array<string> = state.header;
    console.log(headers);
    headers.splice(0, 1);
    console.log(headers);
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
      >
        {headers.map((header: any) => (
          <HeaderItem key={header} {...header} name={header} />
        ))}
      </div>
    );
  }
}
export default Header;
