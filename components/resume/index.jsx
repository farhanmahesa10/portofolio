import Image from "next/image";
import { useEffect, useState } from "react";
import WorkCard from "../materials/work-card";
import ProgressBar from "../materials/progress-bar";
import ResumeService from "../../services/resume-service";
import WorkSkillService from "../../services/workskill-service";
const Resume = () => {
  const [experiences, setExperiences] = useState([]);
  const [workSkills, setWorkSkills] = useState([]);
  useEffect(() => {
    getExperience();
    getWorkskill();
  }, []);

  const getExperience = async () => {
    const data = await ResumeService.Get();
    setExperiences(data.data);
  };

  const getWorkskill = async () => {
    const data = await WorkSkillService.Get();
    setWorkSkills(data.data);
  };

  return (
    <div name="education" className="bg-gray-50 " id="resume">
      {/* some bug space */}
      <h1 className="text-center text-5xl font-semibold ">&nbsp;</h1>
      <h2 className="text-center mt-10 text-xl ">
        <span className="border-b-4 border-gray-700 pb-4 ">
          &nbsp;&nbsp;RESUME&nbsp;&nbsp;
        </span>
      </h2>

      <div className="grid xl:grid-cols-2 gap-2 mt-10  px-9">
        <div className="">
          <h1 className=" text-4xl font-semibold ">Experience </h1>
          {experiences.map((r, i) => {
            return (
              <WorkCard
                key={i}
                title={r.profession}
                year={r.year}
                company={r.company}
                year="2020-2020"
                company="PT. Smartin teknologi Sistem"
              >
                <p>{r.description}</p>
              </WorkCard>
            );
          })}
        </div>
        <div>
          <h1 className=" text-4xl font-semibold ">Work Skill</h1>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {workSkills.map((r, i) => {
              return (
                <ProgressBar
                  key={i}
                  title={r.name}
                  score={r.score}
                  className="mt-10"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
