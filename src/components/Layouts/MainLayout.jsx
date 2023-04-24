import React from "react";
import { Navbar } from "react-bootstrap";
import { BsThreeDotsVertical, BsGlobe } from "react-icons/bs";
import ModalLogin from '../../components/Layouts/ModalLogout'
import '../../App.css'



const MainLayout = () => {
  return (
    <div className="crud">
      <div class="dropdown">
          <a target="_blank" href="http://localhost:3000">
          <button class="dropbtn">
            <BsGlobe />
          </button>
        </a>
      </div>
      <div class="dropdown">
        <button class="dropbtn">
          <BsThreeDotsVertical />
        </button>
        <div class="dropdown-content">
          <a href="#">
            <ModalLogin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
