import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { updateFees } from "../Redux/Slice/action";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import './trans.css'

const ModalComp = ({
  open,
  setOpen,
  stuname,
  fname,
  picpoint,
  pictime,
  distance,
  charge,
  stuaddress,
  busname,
  drivername,
  conductorname,
  dvrivernob,
  conductornob,
  totalstdnt,
  busroute
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
        <Modal.Title>Student Transportation Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col sm={4}  >
          <div>
                <p><b>Student Name:</b> <span className="spaT" >{stuname}</span></p>
                <p><b>Fater Name:</b> <span className="spaT" >{fname}</span></p>
                <p><b>Pic Point:</b> <span className="spaT" >{picpoint}</span></p>
                <p><b>Pic Time:</b> <span className="spaT" >{pictime}</span></p>
                <p><b>Distance:</b> <span className="spaT" >{distance}</span></p>
                <p><b>Charge:</b> <span className="spaT" >{charge}</span></p>
                <p><b>Address:</b> <span className="spaT" >{stuaddress}</span></p>
                </div>
            </Col>
            <Col sm={4}>
              <p><b>Bus No:</b> <span className="spaT" >{busname}</span></p>
              <p><b>Driver Name:</b><span className="spaT">{drivername}</span></p>
              <p><b>Conductor Name:</b><span className="spaT">{conductorname}</span></p>
              <p><b>Driver Nob:</b><span className="spaT" >{dvrivernob}</span></p>
              <p><b>Conductor Nob:</b><span className="spaT" >{conductornob}</span></p>
              <p><b>Total:</b><span className="spaT" >{totalstdnt}</span></p>
              <p><b>Bus Route:</b><span className="spaT" >{busroute}</span></p>

           

          </Col>

          <Col sm={4}>
            <div className="mod-img" > </div>
            <p className="img-text"> Image of student</p>

            <div style={{ marginLeft: "60px", marginTop: "40%" }}>
              <Button variant="secondary"
                style={{ width: "100px", height: "50px" }}
                onClick={() => setOpen(false)}>
                Cancel
              </Button>

              <Button variant="danger"
                style={{ width: "100px", height: "50px", marginLeft: "20px" }}
              >
                Edit
              </Button>


            </div>
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