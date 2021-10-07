import { useState, useEffect } from "react";
import InputText from "../materials/form-input/input-text";
import EducationService from "../../services/education-service";

const AdminEducation = props => {
  const [educations, setEducations] = useState([]);
  const [updateId, setUpdateId] = useState(null);
  const [educationToggle, setEducationToggle] = useState(false);
  useEffect(() => {
    getEducation();
  }, []);

  const getEducation = async () => {
    const data = await EducationService.Get();
    setEducations(data.data);
  };

  const [formRequest, setFormRequest] = useState({
    schoolLevel: "",
    schoolName: "",
    periode: "",
  });
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const handleAdd = () => {
    setEducationToggle(true);
    setIsAdding(true);
    setIsEditing(false);
  };
  const handleEdit = req => {
    setEducationToggle(true);
    setFormRequest({
      ...formRequest,
      schoolLevel: req.schoolLevel,
      schoolName: req.schoolName,
      periode: req.periode,
    });
    setUpdateId(req._id);
    setIsAdding(false);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEducationToggle(false);
    setIsAdding(false);
    setIsEditing(false);
    clearFormRequest();
    setUpdateId(null);
  };
  const store = async () => {
    setIsAdding(false);
    setEducationToggle(false);
    await EducationService.Store(formRequest);
    getEducation();
    clearFormRequest();
  };
  const update = async () => {
    setIsEditing(false);
    setEducationToggle(false);
    await EducationService.Update(updateId, formRequest);
    getEducation();
    clearFormRequest();
  };

  const handleFormRequestChange = (key, value) => {
    switch (key) {
      case "schoolLevel":
        setFormRequest({ ...formRequest, schoolLevel: value });
        break;
      case "schoolName":
        setFormRequest({ ...formRequest, schoolName: value });
        break;
      default:
        setFormRequest({ ...formRequest, periode: value });
    }
  };
  const clearFormRequest = () => {
    setFormRequest({
      schoolLevel: "",
      schoolName: "",
      periode: "",
    });
  };

  const handleDestroy = async id => {
    await EducationService.Destroy(id);
    getEducation();
  };
  return (
    <div>
      <div className="flex items-center gap-2">
        <h1 className=" text-2xl">Education</h1>
        <button
          onClick={handleAdd}
          className={` px-2 py-1 bg-primary hover:bg-yellow-300 text-white rounded-md`}
        >
          <i className="fa fa-plus"></i>
        </button>
        <button
          onClick={store}
          className={`${
            isAdding ? "" : "hidden"
          }  px-2 py-1 bg-green-500 hover:bg-green-400 text-white rounded-md`}
        >
          <i className="fa fa-check"></i> Add
        </button>
        <button
          onClick={update}
          className={`${
            isEditing ? "" : "hidden"
          } px-2 py-1 bg-green-500 hover:bg-green-400 text-white rounded-md`}
        >
          <i className="fa fa-check"></i> Update
        </button>
        <button
          onClick={handleCancel}
          className={`${
            isEditing || isAdding ? "" : "hidden"
          } px-2 py-1 bg-red-500 hover:bg-red-400 text-white rounded-md`}
        >
          <i className="fa fa-times"></i> Cancel
        </button>
      </div>
      <div className={`${isEditing || isAdding ? "" : "hidden"} flex gap-4`}>
        <div className="w-full mt-7">
          <InputText
            placeholder="School Name"
            value={formRequest.schoolName || ""}
            valueChange={value => handleFormRequestChange("schoolName", value)}
          />
          <InputText
            placeholder="School Level"
            value={formRequest.schoolLevel || ""}
            valueChange={value => handleFormRequestChange("schoolLevel", value)}
          />
          <InputText
            placeholder="Periode"
            value={formRequest.periode || ""}
            valueChange={value => handleFormRequestChange("periode", value)}
          />
        </div>
      </div>
      <div className="mt-4  grid gap-4">
        {educations.map((r, i) => {
          return (
            <div
              className=" flex justify-between gap-4 hover:shadow-xl"
              key={i}
            >
              <div className="">
                <h1 className="text-xl font-semibold">{r.schoolName}</h1>
                <h1> {r.schoolLevel}</h1>
                <h1>{r.periode}</h1>
              </div>
              <div
                className={` px-2 ${
                  educationToggle ? "hidden" : ""
                } flex gap-4`}
              >
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
    </div>
  );
};

export default AdminEducation;
