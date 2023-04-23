import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { BsThreeDotsVertical, BsGlobe } from "react-icons/bs";
import MachineList from "../dashboardData/ReadData";
import ModalLogin from "../Layouts/ModalLogout";
// import Chart from "../dashboardData/Chart";
import AddCards from '../dashboardData/AddCards'
import './das.css'

const Dashboard = () => {
  return (
    <>
      <div className="dashboards">
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
              <ModalLogin/>
            </a>
          </div>
        </div>
      </div>
      <center>
        <h1 className="q">Dashboard / School management System</h1>
      </center>
      
      <Container>
        <Row >
        <Col sm={12}  className="addCa">  <AddCards /></Col>
      </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="img-BBox">
              <img style={{width:"100%",height:"100%"}} src="/school.jpg"/>
            </div>
          </Col>
        </Row>
      </Container>

      {/* <Container>
        <Row >
        <Col sm={12}> <Chart /> </Col>
      </Row>
      </Container> */}


      {/* <Container className="dashboard-card">
        <Row className="dash-row">
          <MachineList />
        </Row>
      </Container> */}
      
      
    </>
  );
};

export default Dashboard;
