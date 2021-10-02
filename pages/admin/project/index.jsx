import { useState, useEffect } from "react";

import MainAdminLayout from "../../../components/layouts/admin/main-admin-layout";
import ProjectCard from "../../../components/materials/project-card";
import InputImage from "../../../components/materials/form-input/input-image";
import InputText from "../../../components/materials/form-input/input-text";
import Textarea from "../../../components/materials/form-input/textarea";
import ProjectService from "../../../services/project-service";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProject();
  }, []);

  const [formRequest, setFormRequest] = useState({
    image: "",
    projectName: "",
    periode: "",
    desc: "",
  });
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const getProject = () => {
    ProjectService.Get().then(r => {
      setProjects(r.data);
    });
  };

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
  };
  const store = async () => {
    setIsAdding(false);
    await ProjectService.Store(formRequest);
    getProject();
    clearFormRequest();
  };
  const update = () => {
    setIsEditing(false);
    clearFormRequest();
  };

  const handleFormRequestChange = (key, value) => {
    switch (key) {
      case "projectName":
        setFormRequest({ ...formRequest, projectName: value });
        break;
      case "periode":
        setFormRequest({ ...formRequest, periode: value });
        break;
      case "desc":
        setFormRequest({ ...formRequest, desc: value });
        break;
      default:
        setFormRequest({ ...formRequest, image: value });
    }
  };

  const clearFormRequest = () => {
    setFormRequest({
      image: "",
      projectName: "",
      periode: "",
      desc: "",
    });
  };
  return (
    <MainAdminLayout title="MANAGE PROJECT">
      <div className="-mx-2 -mb-2 p-4">
        <div className={`flex gap-4`}>
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
          <div>
            <InputImage label="Logo" height="h-52" />
          </div>
          <div className="w-full mt-7">
            <InputText
              placeholder="Project name"
              value={formRequest.projectName}
              valueChange={value =>
                handleFormRequestChange("projectName", value)
              }
            />
            <InputText
              placeholder="Periode"
              value={formRequest.periode}
              valueChange={value => handleFormRequestChange("periode", value)}
            />
            <Textarea
              placeholder="Desription"
              value={formRequest.desc}
              valueChange={value => handleFormRequestChange("desc", value)}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div
            className="  mt-5 flex justify-center max-w-7xl   mx-5"
            // style={{ maxWidth: "1300px" }}
          >
            <div className="grid lg:grid-cols-3   gap-4 lg:gap-0  ">
              {projects.map((r, i) => {
                return (
                  <div
                    className={`cardShadowHover  ${ProjectService.BorderStyle(
                      i + 1,
                      projects.length
                    )} flex`}
                    key={i}
                  >
                    <ProjectCard
                      className=" "
                      title={r.projectName}
                      tempo={r.periode}
                      link="#"
                    >
                      {r.desc}
                    </ProjectCard>
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
        </div>
      </div>
    </MainAdminLayout>
  );
};

export default Project;
