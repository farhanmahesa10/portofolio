import { useState, useEffect } from "react";

import InputText from "../materials/form-input/input-text";
import ProgressBar from "../materials/progress-bar";
import InputNumber from "../materials/form-input/input-number";
const AdminWorkSkill = props => {
  const [addToggle, setAddToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  const [formRequest, setFormRequest] = useState([
    { key: 1, skillName: "", skillScore: "" },
  ]);
  const [formRequestUpdate, setFormRequestUpdate] = useState({
    id: 1,
    skillName: "",
    skillScore: "",
  });

  const requestDefault = () => {
    setFormRequest([{ key: 1, skillName: "", skillScore: "" }]);
  };

  const addColumn = () => {
    setFormRequest([
      ...formRequest,
      {
        key: formRequest[formRequest.length - 1].key + 1,
        skillName: "",
        skillScore: "",
      },
    ]);
  };
  const store = () => {
    setAddToggle(false);
    props.onStore(formRequest);
    requestDefault();
  };
  const update = () => {
    setEditToggle(false);
    setAddToggle(false);
  };
  const edit = () => {
    //isi formRequestUpdate pake default value
    setEditToggle(true);
  };
  const formRequestUpdateChange = () => {
    //belum bisa karna belum ada default value
  };
  const handleXbutton = key => {
    let newWorkInput = formRequest.filter(r => r.key != key);
    setFormRequest(newWorkInput);
  };
  const handleformRequestChange = (key, name, value) => {
    let arr = [...formRequest];
    switch (name) {
      case "skillName":
        arr[key] = { ...arr[key], skillName: value };
        break;
      default:
        arr[key] = { ...arr[key], skillScore: value };
    }
    setFormRequest(arr);
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
            } px-2 py-1 bg-primary text-white rounded-md`}
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
              className={` px-2 py-1 bg-green-500 hover:bg-green-4 text-white rounded-md`}
              onClick={store}
            >
              <i className="fa fa-check"></i> Add
            </button>
            <button
              className={`px-2 py-1 bg-red-500 hover:bg-red-400 text-white rounded-md`}
              onClick={() => {
                setAddToggle(false);
                requestDefault();
              }}
            >
              <i className="fa fa-times"></i> Cancel
            </button>
            <button
              className={`px-2 py-1 bg-primary text-white rounded-md`}
              onClick={addColumn}
            >
              Add column
            </button>
          </div>
          {/* -editing button */}
          <div className={`${!editToggle ? "hidden" : ""} flex gap-4`}>
            <button
              className="px-2 py-1 bg-green-400 text-white rounded-md"
              onClick={update}
            >
              <i className="fa fa-check"></i> Update
            </button>
            <button
              className={` px-2 py-1 bg-red-500 hover:bg-red-400 text-white rounded-md`}
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
                  value={r.skillName}
                  valueChange={value =>
                    handleformRequestChange(i, "skillName", value)
                  }
                />
                <div className="flex">
                  <div className="flex-1">
                    <InputNumber
                      className=" "
                      value={r.skillScore}
                      valueChange={value =>
                        handleformRequestChange(i, "skillScore", value)
                      }
                      placeholder="Skill score"
                    />
                  </div>
                  <div>
                    {i > 0 ? (
                      <button
                        className="px-2 py-1 bg-red-500 hover:bg-red-400 text-white rounded-md"
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
          <InputText className=" " placeholder="Skill name" />
          <div className="flex">
            <div className="flex-1">
              <InputNumber className=" " placeholder="Skill score" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex gap-2 hover:shadow-xl px-2 pb-1">
          <ProgressBar title="HTML" score="100" className="w-full mt-10" />
          <div>
            <button
              onClick={edit}
              className={editToggle || addToggle ? "hidden" : ""}
            >
              <i className="fa fa-pencil px-2 py-1 hover:bg-yellow-300 bg-primary h-full rounded-md text-white -ml-4"></i>
            </button>
          </div>
        </div>
        <div className="flex gap-2 hover:shadow-xl px-2 pb-1">
          <ProgressBar title="HTML" score="100" className="w-full mt-10" />
          <div>
            <button
              onClick={edit}
              className={editToggle || addToggle ? "hidden" : ""}
            >
              <i className="fa fa-pencil px-2 py-1 hover:bg-yellow-300 bg-primary h-full rounded-md text-white -ml-4"></i>
            </button>
          </div>
        </div>
        <div className="flex gap-2 hover:shadow-xl px-2 pb-1">
          <ProgressBar title="HTML" score="100" className="w-full mt-10" />
          <div>
            <button
              onClick={edit}
              className={editToggle || addToggle ? "hidden" : ""}
            >
              <i className="fa fa-pencil px-2 py-1 hover:bg-yellow-300 bg-primary h-full rounded-md text-white -ml-4"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminWorkSkill;
