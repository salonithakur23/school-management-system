import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import {VscStarFull} from 'react-icons/vsc'
import { Link } from "react-router-dom";
import { VscStarFull } from "react-icons/vsc";
// import "./pages.css";


const ModalCamp = ({
  open,
  setOpen,
  sr,
  firstname,
  lastname,
  doa,
  cla,
  dob,
  age,
  gender,
  board,
  sibling,
  aadhar,
  contact,
  category,
  father,
  mother,
  foccupation,
  moccupation,
  presentaddress,
  permanentaddress,
  city,
  religion,
  id,

}) => {



  return (
    <>
      <Modal style={{ width: "100%", height: "100%" }}
        show={open}
        onHide={() => setOpen(false)}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Student Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm={4} >
                
                  <h5> <VscStarFull />Personal Details</h5>
                  <hr />
          

              <Col sm={4}>

              <Col sm={4} >
              <h5> <VscStarFull />Professional Details</h5>
                  <hr />
                <p> <b>Contact no</b> <span className="spaT" >{contact}</span></p>
                <p> <b>Category</b> <span className="spaT" >{category}</span></p>
                <p> <b>Father name</b> <span className="spaT" >{father}</span></p>
                <p> <b>Mother name</b> <span className="spaT" >{mother}</span></p>
                <p> <b>Father's Occupation</b> <span className="spaT" >{foccupation}</span></p>
                <p> <b>Mother's Occupation</b> <span className="spaT" >{moccupation}</span></p>
                <p> <b>Present address</b> <span className="spaT" >{presentaddress}</span></p>
                <p> <b>Permanent address</b> <span className="spaT" >{permanentaddress}</span></p>
                <p> <b>City</b> <span className="spaT" >{city}</span></p>
                <p> <b>Religion</b> <span className="spaT" >{religion}</span></p>
              </Col>

              <Col sm={4}>
                <div className="mod-img" > </div>
                <p className="img-text"> Image of student</p>

                  <Button className="edit-btn">Edit</Button>
              </Col>

            </Row>
          </Container>

        </Modal.Body>

      </Modal>


    </>
  );
};

export default ModalCamp;