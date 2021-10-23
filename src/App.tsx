import { Component } from "react";
import { fetchCsvData } from "./app/api";
import store from "./app/store";
import { initHeader, initData, maxData, initTag, initWidth } from "./actions";
import HeaderCon from "./container/headerCon";
import ListCon from "./container/listCon";
class App extends Component {
  initState() {
    let file_path: string = "data.csv";
    fetchCsvData(file_path).then((res) => {
      let data: any = res;
      let temp: any = data[0];
      let x: any;
      let headers: Array<string> = [];
      for (x in temp) {
        headers.push(x);
      }
      headers.splice(0, 2);
      store.dispatch(initHeader(headers));
      store.dispatch(initData(data));
      store.dispatch(maxData(data));
      store.dispatch(initTag(headers));
      store.dispatch(initWidth(headers));
    });
  }
  componentDidMount() {
    this.initState();
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
