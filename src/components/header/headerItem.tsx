import React, { Component } from "react";
interface IProps {
  name: string;
}

const HeaderItem = ({ name }: IProps) => (
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
      {name}
    </div>
  </div>
);

export default HeaderItem;
