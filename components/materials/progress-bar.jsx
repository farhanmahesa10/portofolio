//props

// title : string
//score : int
//className
const ProgressBar = props => {
  return (
    <div className={props.className}>
      <div
        className="flex justify-between"
        style={{ width: props.score - 2 + "%" }}
      >
        <h1>{props.title}</h1>
        <h1 className="font-bold">{props.score + "%"}</h1>
      </div>
      <div className="flex  items-center " style={{ width: "100%" }}>
        <div
          className="bg-primary rounded-full h-1 -mx-1  "
          style={{ width: props.score + "%" }}
        >
          &nbsp;
        </div>
        <div className="rounded-full border-4 bg-white border-primary w-4 h-4 ">
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
