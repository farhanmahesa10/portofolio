import { useState } from "react";
import WorkCard from "../materials/work-card";
import InputText from "../materials/form-input/input-text";
import Textarea from "../materials/form-input/textarea";

const AdminExperience = props => {
  const [profession, setProfession] = useState("");
  const [year, setYear] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [experienceToggle, setExperienceToggle] = useState(false);

  const storeExperience = () => {
    setIsAdding(false);
    setExperienceToggle(false);
    props.onStore(handleFormRequest());
    clearRequest();
  };
  const handleEdit = () => {
    setIsEditing(true);
    setExperienceToggle(true);
  };

  const handleAdding = () => {
    setIsEditing(false);
    setIsAdding(true);
    setExperienceToggle(true);
  };

  const updateExperience = () => {
    setIsEditing(false);
    setExperienceToggle(false);
    props.onUpdate(handleFormRequest());
    clearRequest();
  };

  const handleFormRequest = () => {
    let request = {
      profession,
      year,
      company,
      description,
    };
    return request;
  };

  const clearRequest = () => {
    setDescription("");
    setProfession("");
    setYear("");
    setCompany("");
  };
  const handleCancelInput = () => {
    setIsAdding(false);
    setIsEditing(false);
    setExperienceToggle(false);
    clearRequest();
  };
  return (
    <div>
      {/* -Experience */}
      <div className="flex flex-col  mb-4">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl ">Experience</h1>
          <button
            className={`${
              experienceToggle ? "hidden" : ""
            } px-2 py-1 bg-primary text-white rounded-md`}
            onClick={handleAdding}
          >
            <i className="fa fa-plus"></i>
          </button>

          <button
            className={`${
              !isAdding ? "hidden" : ""
            } px-2 py-1  bg-green-500 hover:bg-green-400 text-white rounded-md`}
            onClick={storeExperience}
          >
            <i className="fa fa-check"></i> Save
          </button>
          <button
            className={`${
              !isEditing ? "hidden" : ""
            } px-2 py-1  bg-green-500 hover:bg-green-400 text-white rounded-md`}
            onClick={updateExperience}
          >
            <i className="fa fa-check"></i> Update
          </button>
          <button
            className={`${
              isEditing || isAdding ? "" : "hidden"
            } px-2 py-1  bg-red-500 hover:bg-red-400 text-white rounded-md`}
            onClick={handleCancelInput}
          >
            <i className="fa fa-times"></i> Cancel
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
            valueChange={value => setDescription(value)}
          ></Textarea>
        </div>
      </div>
      <div className="flex hover:shadow-lg">
        <WorkCard
          title="Web Developer"
          year="2020-2020"
          company="PT. Smartin teknologi Sistem"
          className=""
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            repellendus ullam adipisci facilis sit magnam recusandae nulla
            nostrum, odit deserunt?
          </p>
        </WorkCard>
        <div className={`${experienceToggle ? "hidden" : ""} mr-4`}>
          <button onClick={handleEdit}>
            <i className="fa fa-pencil px-2 py-1 hover:bg-yellow-300 bg-primary h-full rounded-md text-white -ml-4"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdminExperience;
