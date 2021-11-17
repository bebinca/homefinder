import React, { forwardRef } from "react";
import Cell from "./cell";
import SelectedCell from "./selectedcell";
import store from "../../app/store";
interface IProps {
  name: string;
  dataItem: Array<number>;
  maxData: Array<number>;
  index: number;
}

const calMargin=()=>{
    let res=0;
    let weight = store.getState().weight;
    let width = store.getState().widthList
    for(let i=0;i<weight.length;i++){
        if(weight[i]>0){
            res+= width[i]*0.05;
        }
    }
    return res
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
        <SelectedCell
            dataItem={dataItem}
        />
      <div className="cell-wrapper" style={{ display: "flex", marginLeft:calMargin()}}>
          {dataItem.map((value: number, index) => (
              ((store.getState().weight[index]>0)?"":
                  <Cell
                      key={index}
                      value={value}
                      width={(value / maxData[index]) * 100}
                      tag={store.getState().tag[index]}
                      flex={store.getState().widthList[index]}
                  />)
          ))}
      </div>
    </div>
  )
);
export default Entry;
