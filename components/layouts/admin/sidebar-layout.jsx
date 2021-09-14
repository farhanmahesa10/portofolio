import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NavMenu from "../../../config/nav-menu";
const SidebarLayout = props => {
  const router = useRouter();

  return (
    <aside
      className={`w-80 shadow-md  h-screen pt-5 top-16 ${props.className}`}
    >
      <div className="grid gap-4 text-xl bg-white pr-5 ">
        {NavMenu.map((r, i) => {
          return (
            <Link href={i != 0 ? "/admin/" + r.link : "/admin"} key={i}>
              <a
                className={`${
                  router.pathname == "/admin/" + r.link ||
                  (router.pathname == "/admin" && i == 0)
                    ? "bg-primary text-white"
                    : ""
                } py-4 pr-2 pl-6 hover:bg-primary hover:text-white rounded-r-full `}
              >
                {r.title}
              </a>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default SidebarLayout;
