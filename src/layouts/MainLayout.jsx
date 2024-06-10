import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <main className=" bg-gradient-to-tr from-fuchsia-300 to-indigo-600 overflow-hidden">
      <div className="container mx-auto ">
        {/* header */}
        <Header />
        {/* main content */}
        <Outlet />
        {/* footer */}
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
