import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { BsArrowUpCircleFill } from "react-icons/bs";


const AddCards = () => {

  const DisplayData = [
 
    {
      label: "Post",
      value: "2,390",
      icon: <BsArrowUpCircleFill />,
      iconLabel: "7%",
    },
    {
      label: "Pages",
      value: "180",
      icon: <BsArrowUpCircleFill />,
      iconLabel: "5.3%",
    },
    {
      label: "New Visitor",
      value: "450",
      icon: <BsArrowUpCircleFill />,
      iconLabel: "4.1%",
    },
    {
      label: "Total Visitor",
      value: "37450",
      icon: <BsArrowUpCircleFill />,
      iconLabel: "2.5%",
    },
  ];

  return (
   <>
  <center>

  <Container>
    <Row >
      {DisplayData.map((item)=>(

   
      // <Col sm={2}>
      <Card className='AddCards' style={{ width: '14rem',marginLeft:"30px"}}>
    
      <Card.Body>
        <Card.Title>{item.label}</Card.Title>
        <Card.Title>{item.value}</Card.Title>
        <Card.Title style={{color:"rgb(19, 110, 146)"}}>{item.icon}</Card.Title>

      
      </Card.Body>
    </Card>
  
      //  </Col>
         ))}
    </Row>
   </Container>
  </center>
   
   </>
  )
}

export default AddCards