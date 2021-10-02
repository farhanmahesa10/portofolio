import { useState, useEffect } from "react";

import InputText from "../materials/form-input/input-text";
import ProgressBar from "../materials/progress-bar";
import InputNumber from "../materials/form-input/input-number";
import WorkSkillService from "../../services/workskill-service";

const AdminWorkSkill = props => {
  const [workSkills, setWorkSkills] = useState([]);
  useEffect(() => {
    getWorkskill();
  }, []);
  const [addToggle, setAddToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(false);

  const [formRequest, setFormRequest] = useState([
    { key: 1, name: "", score: "" },
  ]);
  const [formRequestUpdate, setFormRequestUpdate] = useState({
    id: "",
    name: "",
    score: "",
  });

  const getWorkskill = async () => {
    const data = await WorkSkillService.Get();
    setWorkSkills(data.data);
  };

  const requestDefault = () => {
    setFormRequest([{ key: 1, name: "", score: "" }]);
  };

  const addColumn = () => {
    setFormRequest([
      ...formRequest,
      {
        key: formRequest[formRequest.length - 1].key + 1,
        name: "",
        score: "",
      },
    ]);
  };
  const store = async () => {
    setAddToggle(false);
    await WorkSkillService.Store(formRequest);
    getWorkskill();
    requestDefault();
  };
  const update = async () => {
    await WorkSkillService.Update(formRequestUpdate);
    getWorkskill();
    setEditToggle(false);
    setAddToggle(false);
  };
  const edit = r => {
    //isi formRequestUpdate pake default value

    setFormRequestUpdate({
      id: r._id,
      name: r.name,
      score: r.score,
    });
    setEditToggle(true);
  };
  const formRequestUpdateChange = (field, value) => {
    let val = { ...formRequestUpdate };
    switch (field) {
      case "name":
        val = { ...val, name: value };
        break;
      default:
        val = { ...val, score: value };
    }
    setFormRequestUpdate(val);
  };
  const handleXbutton = key => {
    let newWorkInput = formRequest.filter(r => r.key != key);
    setFormRequest(newWorkInput);
  };
  const handleformRequestChange = (key, name, value) => {
    let arr = [...formRequest];
    switch (name) {
      case "name":
        arr[key] = { ...arr[key], name: value };
        break;
      default:
        arr[key] = { ...arr[key], score: value };
    }
    setFormRequest(arr);
  };
  const handleDestroy = async id => {
    await WorkSkillService.Destroy(id);
    getWorkskill();
  };

  return (
    <div>
      {/* -Work Skill */}
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl ">Work Skill</h1>
          <button
            className={`${
              !addToggle && !editToggle ? "" : " hidden"
            } px-2 py-1 bg-primary text-white rounded-sm`}
            onClick={() => setAddToggle(true)}
          >
            <i className="fa fa-plus"></i>
          </button>
          {/* -adding button */}
          <div
            className={`${
              addToggle && !editToggle ? "" : " hidden"
            } flex gap-4`}
          >
            <button
              className={` px-2 py-1 bg-green-500 hover:bg-green-4 text-white rounded-sm`}
              onClick={store}
            >
              <i className="fa fa-check"></i> Add
            </button>
            <button
              className={`px-2 py-1 bg-red-500 hover:bg-red-400 text-white rounded-sm`}
              onClick={() => {
                setAddToggle(false);
                requestDefault();
              }}
            >
              <i className="fa fa-times"></i> Cancel
            </button>
            <button
              className={`px-2 py-1 bg-primary text-white rounded-sm`}
              onClick={addColumn}
            >
              Add column
            </button>
          </div>
          {/* -editing button */}
          <div className={`${!editToggle ? "hidden" : ""} flex gap-4`}>
            <button
              className="px-2 py-1 bg-green-400 text-white rounded-sm"
              onClick={update}
            >
              <i className="fa fa-check"></i> Update
            </button>
            <button
              className={` px-2 py-1 bg-red-500 hover:bg-red-400 text-white rounded-sm`}
              onClick={() => {
                setEditToggle(false);
                requestDefault();
              }}
            >
              <i className="fa fa-times"></i> Cancel
            </button>
          </div>
        </div>
        {/* -adding form */}
        <div className={`${addToggle && !editToggle ? "" : " hidden"} `}>
          {formRequest.map((r, i) => {
            return (
              <div className="grid grid-cols-2 gap-4" key={r.key}>
                <InputText
                  className=" "
                  placeholder="Skill name"
                  value={r.name}
                  valueChange={value =>
                    handleformRequestChange(i, "name", value)
                  }
                />
                <div className="flex">
                  <div className="flex-1">
                    <InputNumber
                      className=" "
                      value={r.score}
                      valueChange={value =>
                        handleformRequestChange(i, "score", value)
                      }
                      placeholder="Skill score"
                    />
                  </div>
                  <div>
                    {i > 0 ? (
                      <button
                        className="px-2 py-1 bg-red-500 hover:bg-red-400 text-white rounded-sm"
                        onClick={() => handleXbutton(r.key)}
                      >
                        <i className="fa fa-times"></i>
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* -editing form */}
      <div className={`${!editToggle ? "hidden" : ""} `}>
        <div className="grid grid-cols-2 gap-4">
          <InputText
            className=" "
            placeholder="Skill name"
            value={formRequestUpdate.name}
            valueChange={value => formRequestUpdateChange("name", value)}
          />
          <div className="flex">
            <div className="flex-1">
              <InputNumber
                className=" "
                placeholder="Skill score"
                value={formRequestUpdate.score}
                valueChange={value => formRequestUpdateChange("score", value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {workSkills.map((r, i) => {
          return (
            <div className="flex gap-2 hover:shadow-xl px-2 pb-1" key={i}>
              <ProgressBar
                title={r.name}
                score={r.score}
                className="w-full mt-10"
              />
              <div
                className={`${
                  editToggle || addToggle ? "hidden" : ""
                } flex gap-4`}
              >
                <div className="mr-2">
                  <button onClick={() => edit(r)}>
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

export default AdminWorkSkill;
