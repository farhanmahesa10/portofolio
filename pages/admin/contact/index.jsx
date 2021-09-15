import { useState } from "react";
import MainAdminLayout from "../../../components/layouts/admin/main-admin-layout";
const Contact = () => {
  const [formRequest, setFormRequest] = useState({
    icon: "",
    contact: "",
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
    console.log(formRequest);
    clearFormRequest();
  };
  const update = () => {
    setIsEditing(false);
    console.log(formRequest);
    clearFormRequest();
  };

  const handleFormRequestChange = (key, value) => {
    switch (key) {
      case "icon":
        setFormRequest({ ...formRequest, icon: value });
        break;
      default:
        setFormRequest({ ...formRequest, contact: value });
    }
  };
  const clearFormRequest = () => {
    setFormRequest({
      icon: "",
      contact: "",
    });
  };
  return (
    <MainAdminLayout title="MANAGE CONTACT">
      <div className="flex items-center gap-2">
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
      <div className=" md:mx-32 mx-8 flex items-center" id="contact">
        <div className=" ">
          <div className="">
            <h1 className="text-xl mb-4 mt-10">CONTACT</h1>
            <h1 className="text-7xl font-bold">Know me closer.</h1>

            <div className="h-2 w-60  bg-gray-800"></div>

            <ul className="lg:flex flex-wrap flex  mt-24 gap-11 ">
              <li className="flex items-center gap-4 ">
                <i className="fa fa-whatsapp fa-2x text-green-500"></i>
                <p className="text-lg border-b">0899 - 7197 - 975</p>
              </li>
              <li className="flex items-center gap-4">
                <i className="fa fa-envelope-square fa-2x "></i>
                <p className="text-lg border-b">farhanmahesa10@gmail.com</p>
              </li>
              <li className="flex items-center gap-4 ">
                <i className="fa fa-linkedin  bg-blue-800 p-1 text-white rounded-sm "></i>
                <a href="/" className="text-lg border-b">
                  https://www.linkedin.com/in/m-farhan-44104b195
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MainAdminLayout>
  );
};

export default Contact;
