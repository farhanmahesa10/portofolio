import { useState, useEffect } from "react";
import InputImage from "../materials/form-input/input-image";
import InputText from "../materials/form-input/input-text";
import Textarea from "../materials/form-input/textarea";
import OrganizationService from "../../services/organization-service";
const AdminOrganization = props => {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    getOrganization();
  }, []);

  const getOrganization = async () => {
    const data = await OrganizationService.Get();
    setOrganizations(data.data);
  };

  const [formRequest, setFormRequest] = useState({
    name: "",
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
  const store = async () => {
    setIsAdding(false);
    await OrganizationService.Store(formRequest);
    getOrganization();
    clearFormRequest();
  };
  const update = () => {
    setIsEditing(false);
    props.onUpdate(formRequest);
    clearFormRequest();
  };

  const handleFormRequestChange = (key, value) => {
    switch (key) {
      case "name":
        setFormRequest({ ...formRequest, name: value });
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
      name: "",
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
            value={formRequest.name || ""}
            valueChange={value => handleFormRequestChange("name", value)}
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
        {organizations.map((r, i) => {
          return (
            <div className="flex justify-between gap-4 hover:shadow-xl" key={i}>
              <div className="">
                <h1 className="text-xl font-semibold">{r.name}</h1>
                <h1>{r.periode}</h1>
                <h1>{r.position} </h1>
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

export default AdminOrganization;
