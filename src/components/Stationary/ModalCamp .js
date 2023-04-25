import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { updateFees } from "../Redux/Slice/action";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

const ModalComp = ({
  open,
  setOpen,
  iname,
  icate,
  board,
  rate,
  stock,
  date,
  company
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
            <Col sm={6}  >
              <div >


                <p><b className="model">Item Name:</b> <span className="spaT" >{iname}</span></p>
                <p><b className="model">Item Category:</b> <span className="spaT" >{icate}</span></p>
                <p><b className="model">Company name:</b> <span className="spaT" >{company}</span></p>
                <p><b className="model">board Name:</b> <span className="spaT" >{board}</span></p>
                <p><b className="model">Item Price:</b> <span className="spaT" >{rate}</span></p>
                <p><b className="model">Stock:</b> <span className="spaT" >{stock}</span></p>
                <p><b className="model">Item Received Date:</b> <span className="spaT" >{date}</span></p>

                

              </div>

            </Col>

            <Col sm={6}>
              <div className="mod-img" > </div>
              <p className="img-text"> Image of student</p>
                <Button variant="danger" className="edit-btn"> Edit </Button>
            </Col>

          </Row>
        </Container>

      </Modal.Body>

    </Modal>
  );
};

export default ModalComp;

// handleUpdateClick(request).
// navigate(`/update/${id,request}`)