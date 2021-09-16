import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import Image from "next/image";
const Dropdown = props => {
  const [show, setShow] = useState(false);
  const handleClickAway = () => {
    setShow(false);
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="relative inline-block text-left">
        <div className="">
          <button
            onClick={() => setShow(true)}
            type="button"
            className="inline-flex items-center gap-2  justify-center w-full rounded-md   bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            {props.title}
            <i className="fa fa-caret-down fa-"></i>
          </button>
        </div>

        <div
          className={`${
            !show
              ? "transform opacity-0 scale-95"
              : " transform opacity-100 scale-100"
          } origin-top-right absolute transition ease-out duration-100 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div className={`py-1 `} role="none">
            {props.children}
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default Dropdown;
