// Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

export const HomeApp = () => {
  return (
    <div className="container">
      <Header />
      {/* <div className='display-content'> */}
      <Outlet />
      {/* </div> */}

      <Footer />

      <div className="copyrights">Copyright 2025. All Rights Reserved.</div>
    </div>
  );
};
