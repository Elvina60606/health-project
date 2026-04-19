import { Outlet } from "react-router-dom";
import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <div className="bgLight">
          <Header />
        </div>
        <main className="my-auto">
          <Outlet />
        </main>
        <div className="bgLight">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
