import NavMenu from "../../config/nav-menu";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

import { useState, useEffect } from "react";
const HeaderLayout = () => {
  const [showMenuWhenSmall, setShowMenuWhenSmall] = useState(false);
  const [giveShadow, setGiveShadow] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setShowMenuWhenSmall(true);
    }
    window.addEventListener("resize", e => {
      if (e.target.innerWidth >= 1024) {
        setShowMenuWhenSmall(true);
      } else {
        setShowMenuWhenSmall(false);
      }
    });
    window.addEventListener(
      "scroll",
      () => {
        console.log(showMenuWhenSmall);
        if (window.pageYOffset >= 50) {
          setGiveShadow(true);
        } else {
          setGiveShadow(false);
        }
      },
      { passive: true }
    );
  });

  const handleShowMenuWhenSmall = () => {
    if (window.innerWidth < 1024) {
      if (showMenuWhenSmall == true) {
        setShowMenuWhenSmall(false);
      } else {
        setShowMenuWhenSmall(true);
      }
    }
  };
  const handleSetActive = to => {
    setActiveLink(to);
  };
  return (
    <>
      <nav
        className={`z-10  fixed w-full lg:bg-opacity-0   ${
          showMenuWhenSmall ? "bg-gray-500 bg-opacity-50 text-white" : " "
        }`}
        style={
          giveShadow
            ? {
                boxShadow: " 0px 10px 30px 0px #ccc",
                transition: "box-shadow 0.08s",
                backgroundColor: "white",
              }
            : {}
        }
      >
        <div className="mx-auto px-2 sm:px-6 lg:px-8 lg:h-16 ">
          <div className="text-black w-full h-full lg:flex items-center">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-black text-lg font-bold flex items-center gap-2">
                  <Image src="/images/logo.png" width="40" height="40" /> M
                  FARHAN
                </h1>
              </div>
              <div className="lg:hidden my-5">
                <button onClick={handleShowMenuWhenSmall}>
                  <i className="fa fa-bars fa-lg "></i>
                </button>
              </div>
            </div>

            <div className={`lg:flex  ${!showMenuWhenSmall ? "hidden " : ""} `}>
              {NavMenu.map((r, i) => {
                return (
                  <Link
                    to={r.link}
                    key={i}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={handleSetActive}
                    className={`text-lg mx-4 cursor-pointer `}
                    activeClass="active"
                  >
                    <div>
                      <div className=" hover:text-gray-400 py-2 md:py-1 px-2 -mt-8 md:-mt-0 rounded-md pl-2 text-white lg:text-gray-500">
                        {r.title.toUpperCase()}
                      </div>
                    </div>
                  </Link>
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
