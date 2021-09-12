import ProjectCard from "../materials/project-card";

const Project = () => {
  return (
    <div id="project">
      <h1 className="text-center">&nbsp;</h1>
      <h2 className="text-center mt-10 text-xl ">
        <span className="border-b-4 border-gray-700 pb-4 ">
          &nbsp;&nbsp;EDUCATION&nbsp;&nbsp;
        </span>
      </h2>
      <h1 className="text-center text-4xl font-bold pt-10">
        Project Portofolio
      </h1>
      <div className="flex justify-center">
        <div
          className="  mt-5 flex justify-center max-w-7xl  mx-5"
          // style={{ maxWidth: "1300px" }}
        >
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-0  ">
            <ProjectCard
              className="cardShadowHover lg:border-b"
              title="Webgis Survey Jembatan"
              tempo="Jun 2020 - Des 2020 "
              link="#"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              repellendus ullam adipisci Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ex repellendus ullam adipisciss
            </ProjectCard>
            <ProjectCard
              className="cardShadowHover pb-10 lg:border-b   lg:border-l lg:border-r"
              title="Webgis Survey Jembatan"
              tempo="Jun 2020 - Des 2020 "
              link="/"
              demo="true"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              repellendus ullam adipisci Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ex repellendus ullam adipisci
            </ProjectCard>
            <ProjectCard
              className="cardShadowHover pb-10 lg:border-b"
              title="Webgis Survey Jembatan"
              tempo="Jun 2020 - Des 2020 "
              link="#"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              repellendus ullam adipisci Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ex repellendus ullam adipisci
            </ProjectCard>
            <ProjectCard
              className="cardShadowHover"
              title="Webgis Survey Jembatan"
              tempo="Jun 2020 - Des 2020 "
              link="#"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              repellendus ullam adipisci Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ex repellendus ullam adipisciss
            </ProjectCard>
            <ProjectCard
              className="cardShadowHover pb-10   lg:border-l lg:border-r"
              title="Webgis Survey Jembatan"
              tempo="Jun 2020 - Des 2020 "
              link="/"
              demo="true"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              repellendus ullam adipisci Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ex repellendus ullam adipisci
            </ProjectCard>
            <ProjectCard
              className="cardShadowHover pb-10"
              title="Webgis Survey Jembatan"
              tempo="Jun 2020 - Des 2020 "
              link="#"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              repellendus ullam adipisci Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ex repellendus ullam adipisci
            </ProjectCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
