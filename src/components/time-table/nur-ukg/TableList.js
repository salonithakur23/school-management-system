import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {  fetchtimes } from '../../../reducer/action/TimeTableAction';
import { fetchtimes } from '../../Redux/Timetable/action';
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting,  } from 'react-icons/ai';
import NurUkg from './NurUkg';
import { Button, Container, Row, Table } from 'react-bootstrap';
import MainLayout from '../../Layouts/MainLayout';
// import '../../../style/main.css';
import '../../../App.css'
import {Link} from "react-router-dom"
import { IoIosCreate } from "react-icons/io";




const TableList = () => {

  const dispatch = useDispatch()
  const times = useSelector(state => state.times.tab)
  const timesStatus = useSelector(state => state.times.status)
  const error = useSelector(state => state.times.error)


  useEffect(() => {
    if (timesStatus === 'idle') {
      dispatch(fetchtimes())
    }
  }, [timesStatus, dispatch])

  let content

  if (timesStatus === 'loading') {
    content = <div>Loading...</div>
  } else if (timesStatus === 'succeeded') {
    content = times.map(time => <NurUkg key={time.id} time={time} />)
  } else if (timesStatus === 'failed') {
    content = <div>{error}</div>
  }



  return (

    <>

    
      <MainLayout />

      <Container style={{ width: "90%" }} >
        <Table striped bordered hover className='main-table' >
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp; Dashboard/ Class Time-Table</h5></th>
            </tr>
          </thead>
        </Table>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <div className='table-div' >

                    <Button className='table-btn' variant="light" >
                  <IoIosCreate />&nbsp;<Link to="/timetable">Create</Link>
                    </Button>


                    <Button className='table-btn'variant="light" >
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

        <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Time-table</h5>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Days</th>
              <th>Ist Period</th>
              <th>IInd Period</th>
              <th>IIIth Period</th>
              <th>IVth Period</th>
              <th>Vth Period</th>
              <th>VIth Period</th>

            </tr>
          </thead>
          {content}

        </Table>

      </div>

    </>

  )
}

export default TableList;
