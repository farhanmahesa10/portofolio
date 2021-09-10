import NavMenu from "../../config/nav-menu";
import { useState, useEffect } from "react";
const HeaderLayout = () => {
  const [showMenuWhenSmall, setShowMenuWhenSmall] = useState(false);
  const [giveShadow, setGiveShadow] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setShowMenuWhenSmall(true);
    }
    window.addEventListener("resize", e => {
      if (e.target.innerWidth >= 768) {
        setShowMenuWhenSmall(true);
      } else {
        setShowMenuWhenSmall(false);
      }
    });
    window.addEventListener(
      "scroll",
      () => {
        if (window.pageYOffset >= 100) {
          setGiveShadow(true);
        } else {
          setGiveShadow(false);
        }
      },
      { passive: true }
    );
  });

  const handleShowMenuWhenSmall = () => {
    if (window.innerWidth < 768) {
      if (showMenuWhenSmall == true) {
        setShowMenuWhenSmall(false);
      } else {
        setShowMenuWhenSmall(true);
      }
    }
  };
  return (
    <>
      <nav
        className={`z-10 bg-white fixed w-full -mt-2`}
        style={
          giveShadow
            ? {
                boxShadow: " 0px 10px 30px 0px #ccc",
                transition: "box-shadow 0.08s",
              }
            : {}
        }
      >
        <div className="mx-auto px-2 sm:px-6 lg:px-8 md:h-16 ">
          <div className="text-black w-full h-full md:flex items-center">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-black text-lg font-bold">
                  &lt;/&gt; M FARHAN
                </h1>
              </div>
              <div className="md:hidden my-5">
                <button onClick={handleShowMenuWhenSmall}>
                  <i className="fa fa-bars fa-lg "></i>
                </button>
              </div>
            </div>

            <div className={`md:flex ${!showMenuWhenSmall ? "hidden " : ""} `}>
              {NavMenu.map((r, i) => {
                return (
                  <a href="" className="text-lg mx-4 " key={i}>
                    <div className=" hover:bg-gray-50 py-2 md:py-1 px-2 -mt-8 md:-mt-0 rounded-md text-gray-500 pl-2">
                      {r.title.toUpperCase()}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderLayout;
