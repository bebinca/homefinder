import { Component } from "react";
import { fetchCsvData } from "./app/api";
import store from "./app/store";
import { initHeader, initData, maxData, initTag } from "./actions";
import HeaderCon from "./container/headerCon";
import ListCon from "./container/listCon";
class App extends Component {
  componentDidMount() {
    let file_path: string = "data.csv";
    fetchCsvData(file_path).then((res) => {
      let arr: any = res;
      let qwq: any = arr[0];
      let x: any;
      let headers: Array<string> = [];
      for (x in qwq) {
        headers.push(x);
      }
      headers.splice(0, 2);
      store.dispatch(initHeader(headers));
      store.dispatch(initData(arr));
      store.dispatch(maxData(arr));
      store.dispatch(initTag(headers));
    });
  }
  render() {
    return (
      <div
        className="App"
        style={{ backgroundColor: "#000", width: "6720px", height: "1050px" }}
      >
        <HeaderCon />
        <ListCon />
      </div>
    );
  }
}

export default App;
