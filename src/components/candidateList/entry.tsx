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
        backgroundColor: index % 2 ? "#212121" : "#000",
      }}
    >
      <div className="entry-name">{name}</div>
      <div className="cell-wrapper" style={{ display: "flex" }}>
        {dataItem.map((value: number, index) => (
          <Cell
            key={index}
            value={value}
            width={(value / maxData[index]) * 100}
            tag={store.getState().tag[index]}
            flex={store.getState().widthList[index]}
          />
        ))}
      </div>
    </div>
  )
);
export default Entry;
