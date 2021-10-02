import { useState, useEffect } from "react";
import InputText from "../materials/form-input/input-text";
import EducationService from "../../services/education-service";

const AdminEducation = props => {
  const [educations, setEducations] = useState([]);

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
    setIsAdding(true);
    setIsEditing(false);
  };
  const handleEdit = () => {
    setIsAdding(false);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(false);
    clearFormRequest();
  };
  const store = async () => {
    setIsAdding(false);
    await EducationService.Store(formRequest);
    getEducation();
    clearFormRequest();
  };
  const update = () => {
    setIsEditing(false);
    props.onUpdate(formRequest);
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
            placeholder="School Level"
            value={formRequest.schoolLevel || ""}
            valueChange={value => handleFormRequestChange("schoolLevel", value)}
          />
          <InputText
            placeholder="School name"
            value={formRequest.schoolName || ""}
            valueChange={value => handleFormRequestChange("schoolName", value)}
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
              <div>
                <button
                  onClick={handleEdit}
                  className={`${
                    isEditing ? "hidden" : ""
                  } bg-primary px-2 py-1 mr-2 mt-2 hover:bg-yellow-500 text-white rounded-md`}
                >
                  <i className="fa fa-pencil "></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminEducation;
