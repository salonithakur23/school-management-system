import React ,{useState}from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { updateFees } from "../../Redux/Slice/action";

const View = ({
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

  const dispatch = useDispatch();
//   const [isActive, setIsActive] = useState(false);
//   const handleClick = () => {
//     setIsActive(!isActive);
//   }
  const handleUpdateClick = (id, updatedFees) => {
    dispatch(updateFees({ id, updatedFees }));
  }
  return (
    <div style={{ width: "100%", height: "100%",marginTop:"20px" }}
      show={open}
      onHide={() => setOpen(false)}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        
      <div>
        <Container>
          <Row>
            <Col sm={4} style={{fontSize:"1rem", fontWeight:"bold"}}>

              <p>StudentName:</p>
              <p>ClassName:</p>
              <p>RollNo.</p>
              <p>Registration No.</p>
              <p>Registration Fees</p>
              <p>Monthly  Fees</p>
              <p>ExamFee Fees</p>
              <p>Computer Class Fees</p>
              <p>PaymentMethod</p>
              <p>Address</p>
              <p>Remark</p>
              <p>Father Name:</p>
              <p>Mother Name</p>
            </Col>
            <Col sm={4}>
              <p>{sname}</p>
              <p>{cname}</p>
              <p>{rollno}</p>
              <p>{regno}</p>
              <p>{regfee}</p>
              <p>{monfee}</p>
              <p>{examfee}</p>
              <p>{compufee}</p>
              <p>{paymethod}</p>
              <p>{address}</p>
              <p>{remark}</p>
              <p>{fname}</p>
              <p>{mname}</p>
            </Col>
            <Col sm={4}>
              <div style={{width:"300px",height:"300px",backgroundColor:"grey"}}> </div>
             <center> Image of student</center>
             <div style={{marginLeft:"60px",marginTop:"40%"}}>
             <Button variant="secondary"  style={{width:"100px",height:"50px"}} onClick={() => setOpen(false)}>
          Cancel
        </Button>
     
        <Button variant="danger"  style={{width:"100px",height:"50px",marginLeft:"20px"}} onClick={() => handleUpdateClick(id, updateFees)}>
          Edit
        </Button>
             </div>
            </Col>
            
          </Row>
        </Container>
     
      </div>
      {/* <Modal.Footer> */}
      
      {/* </Modal.Footer> */}
    </div>
  );
};

export default View;