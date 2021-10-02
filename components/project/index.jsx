import { useState, useEffect } from "react";
import ProjectCard from "../materials/project-card";
import ProjectService from "../../services/project-service";
const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProject();
  }, []);
  const getProject = () => {
    ProjectService.Get().then(r => {
      setProjects(r.data);
    });
  };

  return (
    <div id="project">
      <h1 className="text-center">&nbsp;</h1>
      <h2 className="text-center mt-14 text-xl ">
        <span className="border-b-4 border-gray-700 pb-4 ">
          &nbsp;&nbsp;PROJECT&nbsp;&nbsp;
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
            {projects.map((r, i) => {
              return (
                <ProjectCard
                  key={i}
                  className={`cardShadowHover  ${ProjectService.BorderStyle(
                    i + 1,
                    projects.length
                  )} `}
                  title={r.projectName}
                  tempo={r.periode}
                  link="#"
                >
                  {r.desc}
                </ProjectCard>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
