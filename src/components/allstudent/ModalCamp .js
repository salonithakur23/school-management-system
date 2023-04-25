import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import {VscStarFull} from 'react-icons/vsc'
import { Link } from "react-router-dom";
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
          

                <p> <b>SR No:</b> <span className="spaT" >{sr}</span></p>
                <p> <b>First name</b> <span className="spaT" >{firstname}</span></p>
                <p> <b>Last name</b> <span className="spaT" >{lastname}</span></p>
                <p> <b>DOA</b> <span className="spaT" >{doa}</span></p>
                <p> <b>Class</b> <span className="spaT" >{cla}</span></p>
                <p> <b>DOB</b> <span className="spaT" >{dob}</span></p>
                <p> <b>Gender</b> <span className="spaT" >{gender}</span></p>
                <p> <b>Board</b> <span className="spaT" >{board}</span></p>
                <p> <b>Sibling</b> <span className="spaT" >{sibling}</span></p>
                <p> <b>Aadhar no</b> <span className="spaT" >{aadhar}</span></p>
              </Col>

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