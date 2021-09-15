import { useState } from "react";
import InputImage from "../materials/form-input/input-image";
import InputText from "../materials/form-input/input-text";
import Textarea from "../materials/form-input/textarea";

const AdminOrganization = props => {
  const [formRequest, setFormRequest] = useState({
    schoolLevel: "",
    periode: "",
    position: "",
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
      case "position":
        setFormRequest({ ...formRequest, position: value });
        break;
      default:
        setFormRequest({ ...formRequest, periode: value });
    }
  };
  const clearFormRequest = () => {
    setFormRequest({
      schoolLevel: "",
      periode: "",
      position: "",
    });
  };
  return (
    <div>
      <div className="flex items-center gap-2">
        <h1 className=" text-2xl">Organization</h1>
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
            placeholder="Periode"
            value={formRequest.periode || ""}
            valueChange={value => handleFormRequestChange("periode", value)}
          />
          <InputText
            placeholder="Position"
            value={formRequest.position || ""}
            valueChange={value => handleFormRequestChange("position", value)}
          />
        </div>
      </div>
      <div className="mt-4  grid gap-4">
        <div className="flex justify-between gap-4 hover:shadow-xl">
          <div className="">
            <h1 className="text-xl font-semibold">
              Himpunan Mahasiswa Teknik Komputer
            </h1>
            <h1>2020-2021</h1>
            <h1>Koordinator Department Pendidikan </h1>
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
          <div className="">
            <h1 className="text-xl font-semibold">
              Himpunan Mahasiswa Teknik Komputer
            </h1>
            <h1>2020-2021</h1>
            <h1>Anggota Himpunan Mahasiswa Teknik Komputer </h1>
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

export default AdminOrganization;
