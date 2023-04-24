import { Button, Col, Container, Row } from 'react-bootstrap'
import { AiFillDashboard } from 'react-icons/ai'
import { FaCalculator, FaCarAlt, FaCartPlus, FaJediOrder,
   FaObjectGroup, FaProductHunt, FaUserAlt, FaUserPlus } from 'react-icons/fa'
// import Button from '@mui/material/Button';
import Table from 'react-bootstrap/Table';
import { ProductText } from './Constant';
import MainLayout from '../Layouts/MainLayout';
import './das.css'



const Dashboard = () => {

  const user = [
    {
      name: "Rishi ",
      email: "rishi1254@gamil.com",
      stuts: "Active"
    },
    {
      name: "Ravi",
      email: "ravi123@gamil.com",
      stuts: "Active"
    },
    {
      name: "Keshav Saini",
      email: "keshav@gamil.com",
      stuts: "Active"
    },
    {
      name: "Deepanshu Saini",
      email: "deepanshu@gamil.com",
      stuts: "Active"
    },
   

  ]

  const product = [
    {
      img: "./img/boy.jpg",
      name: "Pranjal",
      class: "1st",
      // modal: "Sony Vivo 2046 mx",
      stuts: "Active"
    },
    {
      img: "./img/boy1.jpg",
      name: "Vinod",
      class: "2st",
      // modal: "Sony Vivo 2046 mx",
      stuts: "Active"
    },
    {
      img: "./img/girl1.jpg",
      name: "Prachi",
      class: "5st",
      // modal: "Sony Vivo 2046 mx",
      stuts: "Active"
    },
    {
      img: "./img/Child.jpg",
      name: "Anubhav",
      class: "3st",
      // modal: "Sony Vivo 2046 mx",
      stuts: "UnActive"
    },
    {
      img: "./img/grl2.jpg",
      name: "Roshni",
      class: "4st",
      // modal: "Sony Vivo 2046 mx",
      stuts: "Active"
    },




  ];






  return (
    <>

   <MainLayout />
     

      <Container>
        
        <Table striped bordered hover style={{textAlign:"left"}}>
          <thead>
            <tr>
              <h5><AiFillDashboard /> &nbsp;{ProductText.DASHBOARD} / School Management Application</h5>
            </tr>
          </thead>
        </Table>
        <Row>
          <Col sm={6}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th colSpan={4}><FaUserAlt />&nbsp; &nbsp;Latest User </th>
                </tr>
                <tr>
                  <th>User Name</th>
                  <th>Email:ID</th>
                  <th>Stuats</th>
                </tr>
              </thead>
              <tbody>
                {
                  user.map((item) => {
                    return (
                      <>
                        <tr>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td><Button variant="contained" color="success">{item.stuts}</Button></td>
                        </tr>
                      </>
                    )
                  })
                }
              </tbody>
            </Table>
          </Col> 
       <br></br><br></br>

          <Col md={6}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th colSpan={4}><FaProductHunt />&nbsp; &nbsp;New Admission </th>
                </tr>
                <tr>
                  <th>Student Image</th>
                  <th>Student Name</th>
                  <th>Class</th>
                  <th>Stuats</th>
                </tr>
              </thead>
              <tbody>
                {
                  product.map((item) => {
                    return (
                      <>
                        <tr>
                          <td><img style={{ width: "50px", height: "50px", borderRadius: "50%", }} src={item.img} alt="" /></td>
                          <td>{item.name}</td>
                          <td>{item.class}</td>
                          <td><Button variant="contained" color="success">{item.stuts}</Button></td>
                        </tr>
                      </>
                    )
                  })
                }
              </tbody>
            </Table>
          </Col>
        </Row>
        </Container>
   





      
      
    </>
  );
};

export default Dashboard;
