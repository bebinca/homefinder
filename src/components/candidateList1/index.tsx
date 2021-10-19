import React, { Component } from "react";
interface IProps {
  state: any;
}

class CandidateList extends React.PureComponent<IProps> {
  public render() {
    const { state } = this.props;
    console.log(state);
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
      ></div>
    );
  }
}

export default CandidateList;
