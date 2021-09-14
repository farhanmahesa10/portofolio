import { useState, useEffect } from "react";

import MainAdminLayout from "../../../components/layouts/admin/main-admin-layout";
import WorkCard from "../../../components/materials/work-card";
import ProgressBar from "../../../components/materials/progress-bar";
import InputText from "../../../components/materials/form-input/input-text";
import Textarea from "../../../components/materials/form-input/textarea";
import InputNumber from "../../../components/materials/form-input/input-number";

const Resume = () => {
  const [profession, setProfession] = useState("");
  const [year, setYear] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [experienceToggle, setExperienceToggle] = useState(false);
  const [workSkillToggle, setWorkSkillToggle] = useState(false);
  const [workInputCount, setWorkInputCount] = useState([1]);

  const storeExperience = () => {
    setExperienceToggle(false);
  };
  const storeWorkSkill = () => {
    setWorkSkillToggle(false);
  };

  const workInputWorkColumn = () => {
    let arr = workInputCount;
    arr.push(arr.length + 1);
    setWorkInputCount([...arr]);
  };
  return (
    <MainAdminLayout title="MANAGE RESUME">
      <div className="grid lg:grid-cols-2   -mx-2 -mb-2 p-4">
        <div>
          <div className="flex flex-col  mb-4">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl ">Experience</h1>
              <button
                className={`${
                  experienceToggle ? "hidden" : ""
                } px-2 py-1 bg-primary text-white rounded-md`}
                onClick={() => setExperienceToggle(true)}
              >
                <i className="fa fa-plus"></i>
              </button>
              <button
                className={`${
                  !experienceToggle ? "hidden" : ""
                } px-2 py-1  bg-green-400 text-white rounded-md`}
                onClick={storeExperience}
              >
                <i className="fa fa-check"></i>
              </button>
            </div>
            <div className={`${!experienceToggle ? "hidden" : ""} mr-10`}>
              <InputText
                className=""
                placeholder="Profession"
                value={profession}
                valueChange={value => setProfession(value)}
              />
              <div className="grid grid-cols-2 gap-4">
                <InputText
                  className=""
                  placeholder="Year e.g 2020-2021"
                  value={year}
                  valueChange={value => setYear(value)}
                />
                <InputText
                  className=""
                  placeholder="Company Name"
                  value={company}
                  valueChange={value => setCompany(value)}
                />
              </div>
              <Textarea
                className=""
                placeholder="Description"
                value={description}
                valueChange={value => {
                  setDescription(value);
                }}
              ></Textarea>
            </div>
          </div>
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
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl ">Work Skill</h1>
              <button
                className={`${
                  workSkillToggle ? "hidden" : ""
                } px-2 py-1 bg-primary text-white rounded-md`}
                onClick={() => setWorkSkillToggle(true)}
              >
                <i className="fa fa-plus"></i>
              </button>
              <div className={`${!workSkillToggle ? "hidden" : ""} flex gap-4`}>
                <button
                  className="px-2 py-1 bg-green-400 text-white rounded-md"
                  onClick={storeWorkSkill}
                >
                  <i className="fa fa-check"></i>
                </button>
                <button
                  className="px-2 py-1 bg-primary text-white rounded-md"
                  onClick={workInputWorkColumn}
                >
                  Add column
                </button>
              </div>
            </div>
            <div>
              {workInputCount.map(r => {
                return (
                  <div className="grid grid-cols-2 gap-4" key={r}>
                    <InputText className=" " placeholder="Skill name" />
                    <div className="flex">
                      <div className="flex-1">
                        <InputNumber className=" " placeholder="Skill score" />
                      </div>
                      <div>
                        <button className="px-2 py-1 bg-red-500 hover:bg-red-400 text-white rounded-md">
                          <i className="fa fa-times"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
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
    </MainAdminLayout>
  );
};

export default Resume;
