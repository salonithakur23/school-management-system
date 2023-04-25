import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";

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

              <Col sm={4}>

                <div className="modal-stu" >
                  <h5> <VscStarFull /> Personal Details</h5>
                  <hr />


                  <p> First name :     <span>{firstname}</span>   </p>
                  <p> Last name :  <span>{lastname}</span>   </p>
                  <p> Dob :   <span>{dob}</span>   </p>
                  <p> Age :     <span>{age}</span>    </p>
                  <p> Gender :  <span>{gender}</span>    </p>
                  <p> Sibling :    <span>{sibling}</span>   </p>
                  <p> Category :    <span>{category}</span>     </p>
                  <p> Father name :     <span>{father}</span>   </p>
                  <p> Mother name :       <span>{mother}</span>   </p>
                  <p> Father's Occupation :  <span>{foccupation}</span>   </p>
                  <p> Mother's Occupation :   <span>{moccupation}</span> </p>



                </div>
              </Col><br /><br />


              <Col sm={4}>
                <div className="modal-stu">
                  <h5> <VscStarFull /> Professional Details</h5>
                  <hr />

                  <p> Sr.no :   <span>{sr}</span>  </p>
                  <p> Date of admission : <span>{doa}</span>   </p>
                  <p> Board :      <span>{board}</span>   </p>
                  <p> Class :    <span>{cla}</span>    </p>
                  <p> Present address :  <span>{presentaddress}</span>  </p>
                  <p> Permanent address :   <span>{permanentaddress}</span> </p>
                  <p> Aadhar no :   <span>{aadhar}</span>    </p>
                  <p> Contact no :   <span>{contact}</span>   </p>
                  <p> City :         <span>{city}</span> </p>
                  <p> Religion :    <span>{religion}</span> </p>

                </div>
              </Col>






              <Col sm={4}>
                <div  className="mod-img" >
                  <img className="modal1"  src="img/ggg.jpg" />
                   </div>
                <p className="img-text"> Image of student</p>

                <div >
                 

                  <Button  className="edit-btn"> Edit</Button>


                </div>
              </Col>

            </Row>
          </Container>

        </Modal.Body>

      </Modal>


    </>
  );
};

export default ModalCamp;