import React, { Component, forwardRef } from "react";
import Cell from "./cell";
interface IProps {
  name: string;
  dataItem: Array<number>;
  maxData: Array<number>;
}
type EntryProps = React.HTMLProps<HTMLDivElement>;
const Entry = forwardRef(({ name, dataItem, maxData }: IProps, ref: any) => (
  <div
    ref={ref}
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
      {name}
    </div>
    <div className="cell-wrapper" style={{ display: "flex" }}>
      {dataItem.map((value: number, index) => (
        <Cell
          key={index}
          value={value}
          width={(value / maxData[index]) * 100}
        />
      ))}
    </div>
  </div>
));

// class Entry extends React.PureComponent<IProps> {
//   public render() {
//     const { name, dataItem, maxData } = this.props;
//     return (
//       <div
//         className="entry"
//         style={{
//           flex: "0 0 30px",
//           display: "flex",
//           flexDirection: "row",
//           borderBottom: "1px solid #424242",
//         }}
//       >
//         <div
//           className="name"
//           style={{
//             color: "#fff",
//             lineHeight: "30px",
//             flex: "0 0 150px",
//             padding: "0 5px",
//             whiteSpace: "nowrap",
//             width: "150px",
//             overflow: "hidden",
//             boxSizing: "border-box",
//           }}
//         >
//           {name}
//         </div>
//         <div className="cell-wrapper" style={{ display: "flex" }}>
//           {dataItem.map((value: number, index) => (
//             <Cell value={value} width={(value / maxData[index]) * 100} />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

export default Entry;
