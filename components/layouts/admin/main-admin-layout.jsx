import HeaderAdminLayout from "./header-admin-layout";
import SidebarLayout from "./sidebar-layout";
import { useEffect, useState } from "react";
import Head from "next/head";
const MainAdminLayout = props => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleBarClicked = status => {
    setShowSidebar(status);
  };
  useEffect(() => {
    //component did mount harus menyertakan array kosong parammeter kedua useEffect
    if (window.innerWidth >= 1024) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    });
  }, []);
  return (
    <div className="flex flex-col">
      <Head>
        <title>{props.title}</title>
      </Head>
      <HeaderAdminLayout
        className="fixed"
        barClicked={status => handleBarClicked(status)}
      ></HeaderAdminLayout>
      <SidebarLayout
        className={` fixed  ${showSidebar ? " " : "hidden"} `}
      ></SidebarLayout>
      <main className="  lg:ml-96 ml-10 mt-24 mr-10">
        <h1 className="text-4xl mb-10">{props.title}</h1>
        <div className=" shadow-xl p-2 rounded-sm">{props.children}</div>
      </main>
    </div>
  );
};

export default MainAdminLayout;
