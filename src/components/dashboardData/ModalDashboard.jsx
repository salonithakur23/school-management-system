import React from "react";
import { Modal, Button } from "react-bootstrap";
// import "../Pages/pages.css";

const ModalDashboard = ({
  open,
  setOpen,
  d1,
  d2,
  d3,
  d4,
 
  id,
  handleDelete,
}) => {
  return (
    <Modal
      show={open}
      onHide={() => setOpen(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ display: "flex" }}>
          <div style={{ width:"100%" }}>
            <p style={{ color: "black" }}><b>Member Name :- </b>  {d1}</p>
            <p style={{ color: "black" }}><b>Table Trip Name :- </b> {d2}</p>
            <p style={{ color: "black" }}><b>About Your Trip :- </b>{d3}</p> </div>
            <div style={{ width:"100%" }}>
            <p style={{ color: "black" }}><b>Trip Doration:- </b>{d4}</p>

          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDashboard;
