import { useState } from "react";
import MainAdminLayout from "../../../components/layouts/admin/main-admin-layout";
import InputText from "../../../components/materials/form-input/input-text";
const Account = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formRequest, setFormRequest] = useState({
    email: "",
    password1: "",
    password2: "",
  });
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    clearFormRequest();
  };
  const update = () => {
    setIsEditing(false);
    console.log(formRequest);
    // clearFormRequest();
  };

  const clearFormRequest = () => {
    setFormRequest({
      email: "",
      password1: "",
      password2: "",
    });
  };

  const handleFormRequestChange = (key, value) => {
    switch (key) {
      case "email":
        setFormRequest({ ...formRequest, email: value });
        break;
      case "password1":
        setFormRequest({ ...formRequest, password1: value });
        break;
      default:
        setFormRequest({ ...formRequest, password2: value });
    }
  };
  return (
    <MainAdminLayout title="MANAGE ACCOUNT">
      <div>
        <div className="flex gap-4 mb-2">
          <button
            onClick={handleEdit}
            className={`${
              !isEditing ? "" : "hidden"
            } px-2 py-1 bg-primary hover:bg-yellow-300 text-white rounded-md`}
          >
            <i className="fa fa-pencil"></i>
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
              isEditing ? "" : "hidden"
            } px-2 py-1 bg-red-500 hover:bg-red-400 text-white rounded-md`}
          >
            <i className="fa fa-times"></i> Cancel
          </button>
        </div>
        <div className="grid grid-cols-2">
          <div className="grid gap-4">
            <InputText
              placeholder="Email"
              type="number"
              valueChange={value => handleFormRequestChange("email", value)}
            />
            <InputText
              placeholder="Password"
              type="password"
              valueChange={value => handleFormRequestChange("password1", value)}
            />
            <InputText
              placeholder="Passowrd Confirm"
              type="password"
              valueChange={value => handleFormRequestChange("password2", value)}
            />
          </div>
        </div>
      </div>
    </MainAdminLayout>
  );
};

export default Account;
