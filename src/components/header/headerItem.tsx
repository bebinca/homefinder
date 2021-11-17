import React from "react";
import mount from "../../app/mount";
import store from "../../app/store";
import {
  ResizeIndexAction,
  ResizeLeftAction,
  SortDataAction,
  ToggleResizeAction,
  ToggleTagAction,
  ChangeMaxSelectedAction,
  ChangeWeightAction,
} from "../../actions";
import ReactDOM from "react-dom";
interface IProps {
  name: string;
  index: number;
  tag: boolean;
  width: number;
  showElem: boolean;
  sortData: (weight:Array<number>) => SortDataAction;
  toggleTag: (index: number) => ToggleTagAction;
  toggleResize: (value: boolean) => ToggleResizeAction;
  resizeIndex: (index: number) => ResizeIndexAction;
  resizeLeft: (left: number) => ResizeLeftAction;
  changeWeight: (index: number, newWeight: number) => ChangeWeightAction;
  changeMaxSelected: (data:any, weight:Array<number>) => ChangeMaxSelectedAction;
}

class HeaderItem extends React.PureComponent<IProps> {

  handleClick(index){
    const{changeMaxSelected,changeWeight,sortData} = this.props;
    changeWeight(index,1)
    sortData(store.getState().weight)
    changeMaxSelected(store.getState().data,store.getState().weight)
  }

  getLeft(ele) {
    if (ele === null) return;
    var clientLeft = ele.offsetLeft;
    let current = ele.offsetParent;
    while (current !== null) {
      clientLeft += current.offsetLeft;
      current = current.offsetParent;
    }
    return clientLeft;
  }
  componentDidMount() {
    mount.registerComponent("HeaderItem", this);
  }
  componentWillUnmount() {
    mount.unregisterComponent("HeaderItem", this);
  }
  public render() {
    const {
      name,
      index,
      toggleTag,
      toggleResize,
      resizeIndex,
      resizeLeft,
      tag,
      width,
      showElem,
    } = this.props;
    var color = tag ? "#000" : "transparent";
    var displayWidth = (width ? width.toString() : "230") + "px";
    return (
        <div>
          { showElem? (<div
              className="header"
              style={{
                borderLeft: index === 0 ? "1px solid #dfdfdf" : null,
                flexBasis: displayWidth,
                width: displayWidth,
                backgroundColor: color,
              }}
              onClick={() => this.handleClick(index)}
              onContextMenu={() => {
                toggleTag(index);
                mount.refreshComponent("Header");
                mount.refreshComponent("CandidateList");
              }}
          >
            <div className="name" style={{color: "#fff"}}>
              {name}
            </div>
            <div
                onMouseDown={() => {
                  resizeIndex(index);
                  resizeLeft(this.getLeft(ReactDOM.findDOMNode(this)));
                  toggleResize(true);
                }}
                draggable={false}
                className="resizer"
            ></div>
          </div>): ''
          }
        </div>
    );
  }
}

export default HeaderItem;
