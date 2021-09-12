const ProjectCard = props => {
  let attributes = {};
  if (props.demo) {
    attributes = {
      href: props.link,
      target: "_blank",
    };
  }
  return (
    <a
      {...attributes}
      title="click for detail"
      className={`w-full  p-4  text-center cursor-pointer  transition ease-out duration-300  ${props.className}  `}
    >
      <div>
        <h1
          className="text-left text-primary"
          dangerouslySetInnerHTML={{
            __html: props.demo ? "Demo Available" : "&nbsp;",
          }}
        ></h1>
        <i className="fa fa-cogs fa-3x"></i>
        <div>
          <h1 className="text-xl">{props.title}</h1>
          <h2 className="mb-2">{props.tempo}</h2>
          <div>{props.children}</div>
          <div className="text-right"></div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
