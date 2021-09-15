const WorkCard = props => {
  return (
    <div className={` py-4 px-2 ${props.className}`}>
      <div className="flex gap-4">
        <div>
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center ">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
              1
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl mb-2">{props.title}</h1>
          <h1 className="mb-4">
            {props.year} | {props.company}
          </h1>
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
