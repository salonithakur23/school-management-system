import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchResult } from '../Redux/ResultSlice/action'
import { Button, Container, Row, Table } from 'react-bootstrap'
import MainLayout from '../Layouts/MainLayout'
import '../../App.css'
import { Link } from 'react-router-dom'
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai'
import Result from './Result'
import './result.css'
import { IoIosCreate } from 'react-icons/io'



const ResultList = () => {
  const dispatch = useDispatch()
  const results = useSelector(state => state.results.data)
  const resultsStatus = useSelector(state => state.results.status)
  const error = useSelector(state => state.results.error)

  useEffect(() => {
    if (resultsStatus === 'idle') {
      dispatch(fetchResult())
    }
  }, [resultsStatus, dispatch])

  let content

  if (resultsStatus === 'loading') {
    content = <div>Loading...</div>
  } else if (resultsStatus === 'succeeded') {
    content = results.map(result => <Result key={result.id} result={result} />)
  } else if (resultsStatus === 'failed') {
    content = <div>{error}</div>
  }



  return (
    <>
      <MainLayout />
      <Container style={{ width: "90%" }} >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp;Dasboard /View Student Result Page</h5></th>
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
                      <IoIosCreate />&nbsp;<Link to="/resultform">Create</Link>
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

      {/* <p className='dasfee'>Dasboard /View Student Result Page</p>
      <div className='M-div'>
        <div className='dfelx'>
          <Link to="/resultform ">
            <button className='btns'>+ Create</button>
          </Link>
          <button className='next-btn'>
          <span className='spantext'>  <AiFillSetting /></span>
            Setting
          </button>
          <button className='next-btn'>
            <AiFillEdit />
            Edit
          </button>
          <button className='next-btn'>
          <span className='spantext'><AiFillDelete /></span>
            Delete
          </button>
        </div>
      </div>
      <p className='add'
      > View Student Result Details</p>
      <br /> */}
     



   

      <div className='post-table'>
        <h2 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Student Result  Details</h2>

        <h1></h1>
        <Table responsive striped bordered hover>

        {/* <Table responsive striped bordered hover >
        <table class="table table-bordered border-secondary">
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Class Name </th>
                    <th>Roll No  </th>
                    <th>DOB</th>
                    <th>Father Name</th>
                    <th>Mother Name</th>
                    <th>Residential Address </th>
                </tr>
                <tr>
                    <td>Saloni Thakur</td>
                    <td>2nd</td>
                    <td>4</td>
                    <td>10/03/1998</td>
                    <td>Suresh Singh</td>
                    <td>Omwati Devi</td>
                    <td>Linepar Chau ki wasti</td>

                </tr>
            
            </thead>
            </table>
          </Table> */}
          <table class="table table-bordered border-secondary">
            <thead>
            <tr>
                <th>Subject Name</th>
                <th>SUMMER Assig. (10)</th>
                <th>Unit-I (20)</th>
                <th>Unit-II (20)</th>
                <th>Half Yearly(50)</th>
                <th>Total(100)</th>
                <th>WINTER Assig.(10)</th>
                <th>Unit-III (20) </th>
                <th>Unit-IV (20) </th>
                <th>Annual Exam </th>
                <th>Total(100)</th>
                <th>Grand Total(200)</th>
                <th>view</th>
              </tr>
            </thead>

            {content}

          </table>
        </Table>
      </div>




    

    </>
  )
}

export default ResultList