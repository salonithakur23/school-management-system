import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { fetchdetails } from '../../Redux/TeacherSlice/action';
import Detail from './Detail';
import MainLayout from '../../Layouts/MainLayout';
import { Button, Container, Row } from 'react-bootstrap';
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillEye, AiFillSetting, AiOutlinePlusSquare } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { IoIosCreate } from "react-icons/io";




const DetailList = () => {
  
  const dispatch = useDispatch()
  const details = useSelector(state => state.details.item)
  const detailsStatus = useSelector(state => state.details.status)
  const error = useSelector(state => state.details.error)

 

  useEffect(() => {
    if (detailsStatus === 'idle') {
      dispatch(fetchdetails())
    }
  }, [detailsStatus, dispatch])

  let content

  if (detailsStatus === 'loading') {
    content = <div>Loading...</div>
  } else if (detailsStatus === 'succeeded') {
    content = details.map(detail => <Detail key={detail.id} detail={detail} />)
  } else if (detailsStatus === 'failed') {
    content = <div>{error}</div>
  }


  


  return (
    <>

    <MainLayout />

    <Container style={{ width: "90%" }} >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp; Dashboard/ Student-details</h5></th>
            </tr>
          </thead>
        </Table>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <div className='table-div'>
                
                    <Button className='table-btn' variant="light" >
                      <IoIosCreate />&nbsp;<Link to="/teacherform">Create</Link>
                    </Button>

                    <Button className='table-btn'  variant="light" >
                      <AiFillEdit />&nbsp;Bulk Edit
                    </Button>

                    <Button className='table-btn' variant="light" >
                      <AiFillDelete />&nbsp;Bulk Delete
                    </Button>
                    
                  </div>
                </th>
              </tr>
            </thead>
          </Table>
          <hr />
        </Row>
      </Container>



      <div className="post-table">

      <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Teacher Details</h5>

 <Table responsive>
 <table class="table table-bordered border-secondary">
      <thead>
        <tr>
          {/* <th>Img</th> */}
         <th>First name</th>
          <th>Last name</th>
          <th>Joining date</th>
          <th>Email</th>
          <th>Qualification</th>
          <th>Experience</th>
          <th>Specialisation in sbj</th>
          <th>Last qualification</th>
        <th>Marriage state</th> 
           {/* <th>DOB</th>
          <th>Gender</th>
          <th>Board</th>
         <th>Aadhar no</th>
          <th>Contact no</th>
          <th>Father name</th>
          <th>Mother name</th>
          <th>Father's Occupation</th>
          <th>Mother's Occupation</th>
          <th>Address</th>
          <th>Religion</th>
          <th>City</th>   */}
        
          
        </tr>
      </thead>

    {content}

    </table>
    </Table>

    </div>


    </>
  )
}

export default DetailList
