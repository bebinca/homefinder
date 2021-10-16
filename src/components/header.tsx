import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <div
        className="lineup-wrapper"
        style={{
          // height: "100%",
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
        <div
          className="header"
          style={{
            borderLeft: "1px solid #424242",
            flexBasis: "230px",
            width: "230px",
            padding: "7px 6px 6px 5px",
          }}
        >
          <div className="name" style={{ color: "#fff" }}>
            Total Price
          </div>
        </div>
        <div
          className="header"
          style={{
            borderLeft: "1px solid #424242",
            flexBasis: "230px",
            width: "230px",
            padding: "7px 6px 6px 5px",
          }}
        >
          <div className="name" style={{ color: "#fff" }}>
            Floor Size
          </div>
        </div>
        <div
          className="header"
          style={{
            borderLeft: "1px solid #424242",
            flexBasis: "230px",
            width: "230px",
            padding: "7px 6px 6px 5px",
          }}
        >
          <div className="name" style={{ color: "#fff" }}>
            Living Rooms
          </div>
        </div>
        <div
          className="header"
          style={{
            borderLeft: "1px solid #424242",
            flexBasis: "230px",
            width: "230px",
            padding: "7px 6px 6px 5px",
          }}
        >
          <div className="name" style={{ color: "#fff" }}>
            Bedrooms
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
