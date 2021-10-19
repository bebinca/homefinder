import React, { Component } from "react";
import Bar from "./components/bar";
import CandidateList from "./components/candidateList";
import Header from "./components/header1";
import { fetchCsvData } from "./app/api";
import store from "./app/store";
import { init } from "./actions";
import HeaderCon from "./container/headerCon";
class App extends Component {
  componentDidMount() {
    let file_path: string = "data.csv";
    fetchCsvData(file_path).then((res) => {
      let arr: any = res;
      let qwq: any = arr[0];
      let x: any;
      let headers: Array<string> = [];
      for (x in qwq) {
        console.log(x);
        headers.push(x);
      }
      store.dispatch(init(headers));
      console.log(store.getState());
    });
  }
  render() {
    return (
      <div
        className="App"
        style={{ backgroundColor: "#000", width: "6720px", height: "1050px" }}
      >
        <HeaderCon />
        <CandidateList />
      </div>
    );
  }
}

export default App;
