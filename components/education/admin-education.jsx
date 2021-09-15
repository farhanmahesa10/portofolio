import { useState } from "react";
import InputText from "../materials/form-input/input-text";

const AdminEducation = props => {
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
  const store = () => {
    setIsAdding(false);
    props.onStore(formRequest);
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
        <div className=" flex justify-between gap-4 hover:shadow-xl">
          <div className="">
            <h1 className="text-xl font-semibold">DIPLOMA 3 TEKNIK KOMPUTER</h1>
            <h1>POLITEKNIK SUKABUMI</h1>
            <h1>2020-2021</h1>
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
        <div className=" flex justify-between gap-4 hover:shadow-xl">
          <div className="hover:shadow-xl">
            <h1 className="text-xl font-semibold">SMA</h1>
            <h1>SMA NEGERI 2 KOTA SUKABUMI</h1>
            <h1>2020-2021</h1>
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
        <div className=" flex justify-between gap-4 hover:shadow-xl">
          <div className="">
            <h1 className="text-xl font-semibold">SMP</h1>
            <h1>SMP ISLAM NURUL KAROMAH</h1>
            <h1>2020-2021</h1>
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
        <div className="flex justify-between gap-4 hover:shadow-xl">
          <div className="hover:shadow-xl">
            <h1 className="text-xl font-semibold">SD</h1>
            <h1>SD NEGERI KARAMAT RANDU</h1>
            <h1>2020-2021</h1>
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
      </div>
    </div>
  );
};

export default AdminEducation;
