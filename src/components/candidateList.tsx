import React, { Component } from "react";
import Bar from "./bar";
class CandidateList extends Component {
  render() {
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
            AA
          </div>
          <div className="cell-wrapper" style={{ display: "flex" }}>
            <div
              className="cell"
              style={{
                flex: "0 0 230px",
                position: "relative",
                padding: "5px",
                borderRight: "2px solid transparent",
              }}
            >
              <Bar />
            </div>
            <div
              className="cell"
              style={{
                flex: "0 0 230px",
                position: "relative",
                padding: "5px",
                borderRight: "2px solid transparent",
              }}
            >
              <Bar />
            </div>
            <div
              className="cell"
              style={{
                flex: "0 0 230px",
                position: "relative",
                padding: "5px",
                borderRight: "2px solid transparent",
              }}
            >
              <Bar />
            </div>
            <div
              className="cell"
              style={{
                flex: "0 0 230px",
                position: "relative",
                padding: "5px",
                borderRight: "2px solid transparent",
              }}
            >
              <Bar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CandidateList;
