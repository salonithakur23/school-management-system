import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { updateFees } from "../Redux/Slice/action";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

const ModalComp = ({
  open,
  setOpen,
  sname,
  cname,
  rollno,
  regno,
  regfee,
  monfee,
  examfee,
  compufee,
  paymethod,
  address,
  remark,
  fname,
  mname,
  id,

}) => {


  const request = {
    sname,
    cname,
    rollno,
    regno,
    regfee,
    monfee,
    examfee,
    compufee,
    paymethod,
    address,
    remark,
    fname,
    mname,
    id,
  }


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  }
  // const handleUpdateClick = (val) => {
  //   console.log("hello",updateFees)
  //   dispatch(updateFees(val));
  //   navigate(`/feesForm/${id}`, { state: val });
  // }




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

              <p><b className="model">StudentName:</b><span className="spaT" >{cname}</span></p>
              <p><b className="model">RollNo:</b><span className="spaT" >{rollno}</span></p>
              <p><b className="model">Registration No.:</b><span className="spaT" >{regno}</span></p>
              <p><b className="model">Registration Fees:</b><span className="spaT" >{regfee}</span></p>
              <p><b className="model">Monthly  Fees:</b><span className="spaT" >{monfee}</span></p>
              <p><b className="model">ExamFee Fees:</b><span className="spaT" >{examfee}</span></p>
              <p><b className="model">Computer Class Fees:</b><span className="spaT" >{compufee}</span></p>
              <p><b className="model">PaymentMethod:</b><span className="spaT" >{paymethod}</span></p>
              <p><b className="model">Address:</b><span className="spaT" >{address}</span></p>
              <p><b className="model">Remark:</b><span className="spaT" >{remark}</span></p>
              <p><b className="model">Father Name::</b><span className="spaT" >{fname}</span></p>
              <p><b className="model">Mother Name::</b><span className="spaT" >{mname}</span></p>
            </Col>



            <Col sm={6}>
              <div className="mod-img" > </div>
              <p className="img-text"> Image of student</p>

              <Button className="edit-btn">Edit</Button>
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