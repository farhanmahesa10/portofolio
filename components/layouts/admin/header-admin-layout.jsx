import Image from "next/image";
import { useState } from "react";
const HeaderAdminLayout = props => {
  const [barStatus, setBarStatus] = useState(false);
  const hanldeBar = () => {
    if (barStatus == false) {
      setBarStatus(true);
    } else {
      setBarStatus(false);
    }
    props.barClicked(barStatus);
  };
  return (
    <header
      className={`h-16 shadow-md bg-white  flex items-center justify-between pl-10 md:pr-32 pr-9  w-full ${props.className}`}
    >
      <div className="lg:hidden cursor-pointer" onClick={hanldeBar}>
        <i className="fa fa-bars fa-lg"></i>
      </div>
      <div className="flex items-center gap-4">
        <Image src="/images/logo.png" width="40" height="40" />{" "}
        <h1 className="font-bold text-xl">M FARHAN</h1>
      </div>
      <div>ss</div>
    </header>
  );
};
export default HeaderAdminLayout;
