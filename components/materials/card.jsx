const Card = props => {
  return (
    <div className=" bg-white rounded-md  py-4 px-2">
      <h1 className="font-bold">{props.title}</h1>
      <h1>{props.year}</h1>
      <h1>{props.desc}</h1>
    </div>
  );
};

export default Card;
