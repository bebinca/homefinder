import React, { Component } from "react";
interface IProps {
  value: number;
  width: number;
}

const Cell = ({ value, width }: IProps) => (
  <div
    className="cell"
    style={{
      flex: "0 0 230px",
      position: "relative",
      padding: "5px",
      borderRight: "2px solid transparent",
    }}
  >
    <div
      className="bar"
      style={{
        height: "100%",
        width: width.toString() + "%",
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
        <span>{value}</span>
      </div>
    </div>
  </div>
);

export default Cell;
