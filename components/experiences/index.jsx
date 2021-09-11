import Image from "next/image";
import WorkCard from "../materials/work-card";
import ProgressBar from "../materials/progress-bar";
import ProjectCard from "../materials/project-card";
const Experiences = () => {
  return (
    <div className="bg-gray-100 ">
      {/* some bug space */}
      <h1 className="text-center text-5xl font-semibold mt-">&nbsp;</h1>
      <h2 className="text-center">EXPERIENCES</h2>
      <h1 className="text-center text-5xl font-semibold mt-">Work & Project</h1>
      <div className="grid grid-cols-2 mt-8  px-9">
        <div>
          <div className="grid gap-3 grid-cols-1">
            <WorkCard
              title="Web Developer"
              year="2020-2020"
              company="PT. Smartin teknologi Sistem"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                repellendus ullam adipisci facilis sit magnam recusandae nulla
                nostrum, odit deserunt?
              </p>
            </WorkCard>
          </div>
          <div className="grid gap-3 grid-cols-1">
            <WorkCard
              title="Web Developer"
              year="2020-2020"
              company="PT. Smartin teknologi Sistem"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                repellendus ullam adipisci facilis sit magnam recusandae nulla
                nostrum, odit deserunt?
              </p>
            </WorkCard>
          </div>
        </div>
        <div className="grid grid-cols-3 ">
          <ProjectCard
            className="cardShadowHover border-b"
            title="Webgis Survey Jembatan"
            tempo="Jun 2020 - Des 2020 "
            link="#"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            repellendus ullam adipisci
          </ProjectCard>
          <ProjectCard
            className="cardShadowHover border-b border-r  border-l"
            title="Webgis Survey Jembatan"
            tempo="Jun 2020 - Des 2020 "
            link="/"
            demo="true"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            repellendus ullam adipisci
          </ProjectCard>
          <ProjectCard
            className="cardShadowHover border-b "
            title="Webgis Survey Jembatan"
            tempo="Jun 2020 - Des 2020 "
            link="/"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            repellendus ullam adipisci
          </ProjectCard>
          <ProjectCard
            className="cardShadowHover border-b"
            title="Webgis Survey Jembatan"
            tempo="Jun 2020 - Des 2020 "
            link="#"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            repellendus ullam adipisci
          </ProjectCard>
          <ProjectCard
            className="cardShadowHover border-b border-r  border-l"
            title="Webgis Survey Jembatan"
            tempo="Jun 2020 - Des 2020 "
            link="/"
            demo="true"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            repellendus ullam adipisci
          </ProjectCard>
          <ProjectCard
            className="cardShadowHover border-b "
            title="Webgis Survey Jembatan"
            tempo="Jun 2020 - Des 2020 "
            link="/"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            repellendus ullam adipisci
          </ProjectCard>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
