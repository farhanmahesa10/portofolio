import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Dropdown from "../../materials/dropdown";
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
      <div className="flex items-center gap-2 cursor-pointer">
        <Dropdown
          title={<Image src="/images/logo.png" width="40" height="40" />}
        >
          <Link href="/admin/account">
            <a
              className="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Account settings
            </a>
          </Link>

          <form method="POST" action="#" role="none">
            <button
              type="submit"
              className="text-gray-700 hover:bg-gray-100 block w-full text-left px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-3"
            >
              Sign out
            </button>
          </form>
        </Dropdown>
      </div>
    </header>
  );
};
export default HeaderAdminLayout;
