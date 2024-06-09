import { Outlet } from "react-router";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <main className="container mx-auto">
      {/* header */}
      <Header />
      {/* main content */}
      <Outlet />
      {/* footer */}
    </main>
  );
};

export default MainLayout;
