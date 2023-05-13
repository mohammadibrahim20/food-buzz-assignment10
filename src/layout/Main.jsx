import React from "react";
import { Outlet } from "react-router-dom";
import Swiper from "swiper";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
// import Swiper styles
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
const Main = () => {
  const swiper = new Swiper();
  return (
    <div>
      <Navbar></Navbar>
      <ToastContainer />
      <div className="min-h-[calc(100vh-320px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
