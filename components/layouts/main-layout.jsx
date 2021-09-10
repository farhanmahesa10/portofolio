import HeaderLayout from "./header-layout";

const MainLayout = props => {
  return (
    <div>
      <HeaderLayout></HeaderLayout>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 md:h-16 mt-2 ">
        {props.children}
      </div>
    </div>
  );
};

export default MainLayout;
