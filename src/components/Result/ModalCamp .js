import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { updateFees } from "../Redux/Slice/action";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

const ModalComp = ({
  open,
  setOpen,
  subname,
  sumassgn,
  pd1,
  pd2,
  half,
  halftotal,
  wintassgn,
  pd3,
  pd4,
  annuexam,
  total,
  grntotal,
  grade,
  id,

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
        <Modal.Title>Student Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col sm={6} >

              <p><b className="model">Subject Name:</b><span className="spaT" >{subname}</span></p>
              <p><b className="model">SUMMER Assig.</b><span className="spaT" >{sumassgn}</span></p>
              <p><b className="model">Unit-I (20)</b><span className="spaT" >{pd1}</span></p>
              <p><b className="model">Unit-II (20) .</b><span className="spaT" >{pd2}</span></p>
              <p><b className="model">Half Yearly(50)</b><span className="spaT" >{half}</span></p>
              <p><b className="model">Total(100)</b><span className="spaT" >{halftotal}</span></p>
              <p><b className="model">WINTER Assig.</b><span className="spaT" >{wintassgn}</span></p>
              <p><b className="model">Unit-III (20) </b><span className="spaT" >{pd3}</span></p>
              <p><b className="model">Unit-IV (20)</b><span className="spaT" >{pd4}</span></p>
              <p><b className="model">Annual Exam</b><span className="spaT" >{annuexam}</span></p>
              <p><b className="model">Total(100)</b><span className="spaT" >{total}</span></p>
              <p><b className="model">Grand Total(200)</b><span className="spaT" >{grntotal}</span></p>
              <p><b className="model">Grade</b><span className="spaT" >{grade}</span></p>
            </Col>
            <Col sm={6}>
              <div className="mod-img" > </div>
              <p className="img-text"> Image of student</p>

              {/* <Button className="edit-btn">Edit</Button> */}
            </Col>

          </Row>
        </Container>

      </Modal.Body>

    </Modal>
  );
};

export default ModalComp;

