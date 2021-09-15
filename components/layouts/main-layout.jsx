import HeaderLayout from "./header-layout";
import Head from "next/head";
const MainLayout = props => {
  return (
    <div className="-mt-2">
      <Head>
        <link rel="icon" href={`${process.env.BASE_URL}/images/logo.png`} />
      </Head>
      <HeaderLayout></HeaderLayout>
      <div className="md:h-16 mt-2 ">{props.children}</div>
    </div>
  );
};

export default MainLayout;
