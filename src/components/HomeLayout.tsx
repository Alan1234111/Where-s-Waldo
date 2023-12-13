import { HomeHeader } from "./HomeHeader";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
  return (
    <>
      <HomeHeader />
      <Outlet />
      <Footer />
    </>
  );
};
