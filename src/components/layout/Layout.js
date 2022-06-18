import React from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../common/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <ScrollToTop>
      {/* <ToastContainer
        containerId="network-error"
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        pauseOnHover
      /> */}
      <div>{children && children}</div>
    </ScrollToTop>
  );
};

export default Layout;
