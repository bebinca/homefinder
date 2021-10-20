import React, { createRef } from "react";
import { shuffleDataAction } from "../../actions";
import Entry from "./entry";
import Animate from "./animate";
interface IProps {
  state: any;
  shuffleData: (state: Array<JSON>) => shuffleDataAction;
}

const getEntryData = (data: any) => {
  let entryData: Array<number> = [];
  let x: any;
  let i: number = 0;
  for (x in data) {
    i = i + 1;
    if (i > 2) entryData.push(Number(data[x]));
  }
  return entryData;
};

const getName = (data: any) => {
  let name: string;
  name = data["name"];
  return name;
};

const getId = (data: any) => {
  let id: number;
  id = Number(data["id"]);
  return id;
};

class CandidateList extends React.PureComponent<IProps> {
  public render() {
    const { state, shuffleData } = this.props;
    let data: Array<JSON> = state.data;
    return (
      <div
        style={{
          flex: "1",
          flexDirection: "column",
          height: "calc(100% - 50px)",
          width: "100%",
          position: "relative",
          display: "flex",
        }}
      >
        <Animate>
          {data.map((dataItem: any) => (
            <Entry
              key={getId(dataItem)}
              name={getName(dataItem)}
              dataItem={getEntryData(dataItem)}
              maxData={state.maxData}
              ref={createRef()}
            />
          ))}
        </Animate>
        <button
          style={{ width: "30px", height: "30px" }}
          onClick={() => shuffleData(data)}
        />
      </div>
    );
  }
}

export default CandidateList;
