import React, { Component } from "react";
import Cell from "./cell";
interface IProps {
  name: string;
  dataItem: Array<number>;
}

const Entry = ({ name, dataItem }: IProps) => (
  <div
    className="entry"
    style={{
      flex: "0 0 30px",
      display: "flex",
      flexDirection: "row",
      borderBottom: "1px solid #424242",
    }}
  >
    <div
      className="name"
      style={{
        color: "#fff",
        lineHeight: "30px",
        flex: "0 0 150px",
        padding: "0 5px",
        whiteSpace: "nowrap",
        width: "150px",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {name}
    </div>
    <div className="cell-wrapper" style={{ display: "flex" }}>
      {dataItem.map((value: number) => (
        <Cell value={value} width={value} />
      ))}
    </div>
  </div>
);

export default Entry;
