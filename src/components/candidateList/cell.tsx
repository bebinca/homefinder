interface IProps {
  value: number;
  width: number;
  tag: boolean;
  flex: number;
}

const Cell = ({ value, width, tag, flex }: IProps) => (
  <div
    className="cell"
    style={{
      flex: "0 0 " + (flex ? flex.toString() : "230") + "px",
    }}
  >
    <div
      className="bar"
      style={{
        width: width.toString() + "%",
      }}
    >
      <div className="bar-text">{tag ? null : <span>{value}</span>}</div>
    </div>
  </div>
);

export default Cell;
