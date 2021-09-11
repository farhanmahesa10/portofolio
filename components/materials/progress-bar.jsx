const ProgressBar = props => {
  return (
    <div className={props.className}>
      <div
        className="flex justify-between"
        style={{ width: props.value - 2 + "%" }}
      >
        <h1>{props.title}</h1>
        <h1 className="font-bold">{props.value + "%"}</h1>
      </div>
      <div className="flex  items-center " style={{ width: "100%" }}>
        <div
          className="bg-primary rounded-full h-1 -mx-1  "
          style={{ width: props.value + "%" }}
        >
          &nbsp;
        </div>
        <div className="rounded-full border-4 border-primary w-4 h-4 ">
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
