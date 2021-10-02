import { useState, useEffect } from "react";
import WorkCard from "../materials/work-card";
import InputText from "../materials/form-input/input-text";
import Textarea from "../materials/form-input/textarea";
import ResumeService from "../../services/resume-service";
import AlertConfirm from "../materials/alert-confirm";

const AdminExperience = props => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    getExperience();
  }, []);

  const [profession, setProfession] = useState("");
  const [year, setYear] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [updateId, setUpdateId] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [experienceToggle, setExperienceToggle] = useState(false);

  const getExperience = async () => {
    const data = await ResumeService.Get();
    setExperiences(data.data);
  };

  const storeExperience = async () => {
    setIsAdding(false);
    setExperienceToggle(false);

    const stored = await ResumeService.Store(handleFormRequest());
    getExperience();
    clearRequest();
  };
  const handleEdit = req => {
    setIsEditing(true);
    setCompany(req.company);
    setProfession(req.profession);
    setYear(req.year);
    setDescription(req.description);
    setUpdateId(req._id);
    setExperienceToggle(true);
  };

  const handleAdding = () => {
    setIsEditing(false);
    setIsAdding(true);
    setExperienceToggle(true);
  };

  const updateExperience = async () => {
    setIsEditing(false);
    setExperienceToggle(false);
    const update = await ResumeService.Update(
      updateId,
      handleFormUpdateRequest()
    );
    getExperience();
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

  const handleFormUpdateRequest = () => {
    let request = {
      updateId,
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
  const handleDestroy = async id => {
    const destroy = await ResumeService.Destroy(id);
    getExperience();
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
            } px-2 py-1 bg-primary text-white rounded-sm`}
            onClick={handleAdding}
          >
            <i className="fa fa-plus"></i>
          </button>

          <button
            className={`${
              !isAdding ? "hidden" : ""
            } px-2 py-1  bg-green-500 hover:bg-green-400 text-white rounded-sm`}
            onClick={storeExperience}
          >
            <i className="fa fa-check"></i> Save
          </button>
          <button
            className={`${
              !isEditing ? "hidden" : ""
            } px-2 py-1  bg-green-500 hover:bg-green-400 text-white rounded-sm`}
            onClick={updateExperience}
          >
            <i className="fa fa-check"></i> Update
          </button>
          <button
            className={`${
              isEditing || isAdding ? "" : "hidden"
            } px-2 py-1  bg-red-500 hover:bg-red-400 text-white rounded-sm`}
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
      {experiences.map((r, i) => {
        return (
          <div className="flex justify-between hover:shadow-lg" key={i}>
            <WorkCard
              title={r.profession}
              year={r.year}
              company={r.company}
              className=""
            >
              <p>{r.description}</p>
            </WorkCard>
            <div className={`${experienceToggle ? "hidden" : ""} flex gap-4`}>
              <div className="mr-2">
                <button onClick={() => handleEdit(r)}>
                  <i className="fa fa-pencil px-2 py-1 hover:bg-yellow-300 bg-primary h-full rounded-sm text-white -ml-4"></i>
                </button>
              </div>
              <div>
                <button onClick={() => handleDestroy(r._id)}>
                  <i className="fa fa-trash px-2 py-1 hover:bg-red-300 bg-red-400 h-full rounded-sm text-white -ml-4"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default AdminExperience;
