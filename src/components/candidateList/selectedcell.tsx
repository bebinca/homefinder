import React from "react";
import store from "../../app/store";

interface IProps {
    dataItem: Array<number>;
}

const getSelectedFlex=()=>{
    let widthList = store.getState().widthList;
    let weight = store.getState().weight;
    let flex= 0;
    for(let x=0;x<weight.length;x++){
        if(weight[x]>0)
        {
            flex += widthList[x];
        }
    }
    return flex;
}

const getSelectedMax=()=>{
    return store.getState().maxSelectedData;
}

const SelectedCell = ({dataItem}: IProps) => (
    <div
        className="cell"
        style={{
            flex: "0 0 " + (getSelectedFlex() ? getSelectedFlex().toString() : "0") + "px",
        }}
    >
        {dataItem.map((value: number, index) =>(
            ((store.getState().weight[index]<=0)?"":
                <div key={index}
                    className="bar2"
                    style={{
                        width: ((value/getSelectedMax())*95).toString()+"%",
                        marginLeft:5
                    }}
                >
                    {/*<div className="bar-text">{<span>{value}</span>}</div>*/}
                </div>)
        ))}
    </div>
);

export default SelectedCell;