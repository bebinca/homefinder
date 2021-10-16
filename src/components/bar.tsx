import React, { Component } from "react";
class Bar extends Component {
  render() {
    return (
      <div
        style={{
          height: "100%",
          width: "100px",
          backgroundColor: "#1e88e5",
          float: "left",
          position: "relative",
          overflow: "hidden",
          borderRadius: "3px",
          display: "block",
        }}
      >
        <div
          className="text"
          style={{
            color: "#fff",
            lineHeight: "30px",
            fontSize: "13px",
            position: "absolute",
            top: "-5px",
            left: "5px",
          }}
        >
          <span>12345</span>
        </div>
      </div>
    );
  }
}

export default Bar;
