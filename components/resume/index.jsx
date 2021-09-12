import Image from "next/image";
import WorkCard from "../materials/work-card";
import ProgressBar from "../materials/progress-bar";
import ProjectCard from "../materials/project-card";
const Resume = () => {
  return (
    <div className="bg-gray-50 " id="resume">
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
        <div>
          <h1 className=" text-4xl font-semibold ">Work Skill</h1>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <ProgressBar title="HTML" score="100" className="mt-10" />
            <ProgressBar title="HTML" score="95" className="mt-10" />
            <ProgressBar title="HTML" score="95" className="mt-10" />
            <ProgressBar title="HTML" score="95" className="mt-10" />
            <ProgressBar title="HTML" score="95" className="mt-10" />
            <ProgressBar title="HTML" score="95" className="mt-10" />
            <ProgressBar title="HTML" score="95" className="mt-10" />
            <ProgressBar title="HTML" score="95" className="mt-10" />
            <ProgressBar title="HTML" score="95" className="mt-10" />
            <ProgressBar title="HTML" score="95" className="mt-10" />
            <ProgressBar title="HTML" score="95" className="mt-10" />
            <ProgressBar title="HTML" score="95" className="mt-10" />
            <ProgressBar title="HTML" score="95" className="mt-10" />
            <ProgressBar title="HTML" score="95" className="mt-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
