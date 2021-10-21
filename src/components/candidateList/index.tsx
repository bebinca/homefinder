import React, { createRef } from "react";
import Entry from "./entry";
import Animate from "./animate";
import mount from "../../app/mount";
interface IProps {
  state: any;
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
  componentDidMount() {
    mount.registerComponent("CandidateList", this);
  }
  componentWillUnmount() {
    mount.unregisterComponent("CandidateList", this);
  }
  public render() {
    const { state } = this.props;
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
          {data.map((dataItem: any, index: number) => (
            <Entry
              key={getId(dataItem)}
              name={getName(dataItem)}
              dataItem={getEntryData(dataItem)}
              maxData={state.maxData}
              ref={createRef()}
              index={index}
            />
          ))}
        </Animate>
      </div>
    );
  }
}

export default CandidateList;
