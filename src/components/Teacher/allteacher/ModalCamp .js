import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
// import { updateFees } from "../Redux/Slice/action";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
// import './trans.css'

const ModalComp = ({
  open,
  setOpen,
  firstname1, lastname1, join, email, qufication, experience, special, lastquali, marriage,
  dob1, gender1, board1,  aadhar1, contact1, category1, father1, mother1, foccupation1,
   moccupation1, address1, religion1
  // id,

}) => {





  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  }




  return (
    <Modal style={{ width: "100%", height: "100%" }}
      show={open}
      onHide={() => setOpen(false)}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Teacher Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col sm={4}  >
          <div>
                <p><b>First Name:</b> <span className="spaT" >{firstname1}</span></p>
                <p><b>Last Name:</b> <span className="spaT" >{lastname1}</span></p>
                <p><b>Join Date:</b> <span className="spaT" >{join}</span></p>
                <p><b>Email:</b> <span className="spaT" >{email}</span></p>
                <p><b>Qulification:</b> <span className="spaT" >{qufication}</span></p>
                <p><b>Experience:</b> <span className="spaT" >{experience}</span></p>
                <p><b>Special:</b> <span className="spaT" >{special}</span></p>
                <p><b>Category:</b> <span className="spaT" >{category1}</span></p>
                <p><b>Father Name:</b> <span className="spaT" >{father1}</span></p>
                <p><b>Mother Name:</b> <span className="spaT" >{mother1}</span></p>
                <p><b>last Qualification:</b> <span className="spaT" >{lastquali}</span></p>
            
                </div>
            </Col>
            <Col sm={4}>
            <p><b>Marrige Status:</b><span className="spaT">{marriage}</span></p>
              <p><b>DOB:</b><span className="spaT">{dob1}</span></p>
              <p><b>Gender:</b><span className="spaT" >{gender1}</span></p>
              <p><b>Board:</b><span className="spaT" >{board1}</span></p>
              <p><b>Aadhar no:</b><span className="spaT" >{aadhar1}</span></p>
              <p><b>Contact no:</b><span className="spaT" >{contact1}</span></p>
              <p><b>Father Occupation:</b><span className="spaT" >{foccupation1}</span></p>
              <p><b>Mother Occupation:</b><span className="spaT" >{moccupation1}</span></p>
              <p><b>Address:</b><span className="spaT" >{address1}</span></p>
              <p><b>Religion:</b><span className="spaT" >{religion1}</span></p>

           

          </Col>

          <Col sm={4}>
            <div className="mod-img" > 
            <img className="tea-img" src="teacher1.jpg" />
            
            </div>
            <p className="img-text"> Image of student</p>
              <Button  className="edit-btn">Edit</Button>
          </Col>
        </Row>
      </Container>

    </Modal.Body>

    </Modal >
  );
};

export default ModalComp;

// handleUpdateClick(request).
// navigate(`/update/${id,request}`)