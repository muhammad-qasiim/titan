import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../common/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <ScrollToTop>
      <Navbar />
      {/* <ToastContainer
        containerId="network-error"
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        pauseOnHover
      /> */}
      <div>{children && children}</div>
      <Footer />
    </ScrollToTop>
  );
};

export default Layout;
