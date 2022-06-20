import React from "react";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../../components/common/ScrollToTop";

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
      <Newsletter />
      <Footer />
    </ScrollToTop>
  );
};

export default Layout;
