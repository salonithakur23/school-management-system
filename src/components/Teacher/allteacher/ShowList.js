import React ,{useState}from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowList = ({
  open,
  setOpen,
  firstname1,
  lastname1,

  join,
  email,
  qufication,
  experience,
  special,
  lastquali,
  marriage,
  dob1,
  gender1,
  board1,
  aadhar1,
  contact1,
  category1,
  father1,
  mother1,
  foccupation1,
  moccupation1,
  address1,
  religion1,
  city1,
  id,
  
}) => {
  return (
    <>
   <div style={{ width: "100%", height: "100%" }}
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
            <Col sm={4} style={{fontSize:"1rem", fontWeight:"bold"}}>

            <h5> Sr.no</h5>
              <h5> First name</h5>
              <h5>Last name</h5>
              <h5> Date of admission</h5>
              <h5> Class</h5>
              <h5> Dow</h5>
              <h5> Gender</h5>
              <h5> Board</h5>
              <h5>Sibling</h5>
              <h5> Aadhar no</h5>
              <h5> Contact no</h5>
              <h5> Category</h5>
              <h5> Father name</h5>
              <h5> Mother name</h5>
              <h5> Father's Occupation</h5>
              <h5> Mother's Occupation</h5>
              <h5> Present address</h5>
              <h5> Permanent address</h5>
              <h5> City</h5>
              <h5> Religion</h5>
            </Col>
            <Col sm={4} >
            <p>{firstname1}</p>
           <p>{lastname1}</p>
           <p>{join}</p>
          <p>{email}</p>           
          <p>{qufication}</p>
          <p>{experience}</p>
          <p>{special}</p>
          <p>{lastquali}</p>
          <p>{marriage}</p>
          <p>{dob1}</p>
          <p>{gender1}</p>
          <p>{board1}</p>
          <p>{aadhar1}</p>
          <p>{contact1}</p>
          <p>{category1}</p>
          <p>{father1}</p>
          <p>{mother1}</p>
          <p>{foccupation1}</p>
          <p>{moccupation1}</p>
          <p>{address1}</p>
          <p>{religion1}</p>
          <p>{city1}</p>
         
            </Col>
            <Col sm={4}>
              <div style={{width:"300px",height:"300px",backgroundColor:"grey"}}> </div>
             <center> Image of student</center>
             <div style={{marginLeft:"60px",marginTop:"40%"}}>
             <Button variant="secondary" 
              style={{width:"100px",height:"50px"}}
               onClick={() => setOpen(false)}>
          Cancel
        </Button>
        {/* <Button variant="danger" 
         style={{width:"100px",height:"50px",marginLeft:"20px"}}
          onClick={()=> navigate(`/update/${id}`)}
          >
          Edit
        </Button> */}
             </div>
            </Col>
            
          </Row>
        </Container>
     
      </Modal.Body>

    </div>
   

    </>
  )
}

export default ShowList


