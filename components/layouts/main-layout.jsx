import HeaderLayout from "./header-layout";

const MainLayout = props => {
  return (
    <div className="-mt-2">
      <HeaderLayout></HeaderLayout>
      <div className="md:h-16 mt-2 ">{props.children}</div>
    </div>
  );
};

export default MainLayout;
