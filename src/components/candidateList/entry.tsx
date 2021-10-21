import React, { forwardRef } from "react";
import Cell from "./cell";
import store from "../../app/store";
interface IProps {
  name: string;
  dataItem: Array<number>;
  maxData: Array<number>;
  index: number;
}
const Entry = forwardRef(
  ({ name, dataItem, maxData, index }: IProps, ref: any) => (
    <div
      ref={ref}
      className="entry"
      style={{
        flex: "0 0 30px",
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid #424242",
        backgroundColor: index % 2 ? "#212121" : "#000",
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
        {dataItem.map((value: number, index) => (
          <Cell
            key={index}
            value={value}
            width={(value / maxData[index]) * 100}
            tag={store.getState().tag[index]}
          />
        ))}
      </div>
    </div>
  )
);
export default Entry;
