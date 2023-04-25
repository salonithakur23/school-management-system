import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Container, Row, Table } from 'react-bootstrap'
// import ModalCamp from './ModalCamp '
import MainLayout from '../Layouts/MainLayout'
import '../../App.css'
import { Link } from 'react-router-dom'
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai'
import { fetchTransport } from '../Redux/TransPortSlice/action'
import TransPort from './TransPort'
import { IoIosCreate } from 'react-icons/io'



const TransPortList = () => {
  const dispatch = useDispatch()
  const transports = useSelector(state => state.transports.data)
  const transportsStatus = useSelector(state => state.transports.status)
  const error = useSelector(state => state.transports.error)

  useEffect(() => {
    if (transportsStatus === 'idle') {
      dispatch(fetchTransport())
    }
  }, [transportsStatus, dispatch])

  let content

  if (transportsStatus === 'loading') {
    content = <div>Loading...</div>
  } else if (transportsStatus === 'succeeded') {
    content = transports.map(transport => <TransPort key={transport.id} transport={transport} />)
  } else if (transportsStatus === 'failed') {
    content = <div>{error}</div>
  }



  return (
    <>
      <MainLayout />
      <Container style={{ width: "90%" }} >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp;Dasboard /View TransPortation</h5></th>
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
                      <IoIosCreate />&nbsp;<Link to="/tranportform">Create</Link>
                    </Button>

                    <Button className='table-btn' variant="light" >
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

     


      <p className='add'
      > View Student Fees Details</p>
      <br />

      <div className='post-table'>
        <h2 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Student Tranportation   Details</h2>

        <h1></h1>
        <Table responsive striped bordered hover>
          <table class="table table-bordered border-secondary">
            <thead>
            <tr>
                <th>Bus No</th>
                <th>Driver Name</th>
                <th>Conductor Name</th>
                <th>Driver Cont No.</th>
                <th>Conductor Cont No.</th>
                <th>Bus Route</th>
                <th>Total Student</th>
                <th>View</th>
                 
              </tr>
            </thead>

            {content}

          </table>
        </Table>
      </div>




      
      {/* <br />
      <div className="container-fluid">
        <div className='row ' style={{margin:"auto"}}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Bus No</th>
                <th>Driver Name</th>
                <th>Conductor Name</th>
                <th>Driver Cont No.</th>
                <th>Conductor Cont No.</th>
                <th>Bus Route</th>
                <th>Total Student</th>
                <th>View</th>
                 
              </tr>
            </thead>
            {content}

          </Table>
          </div>
        </div> */}


    </>
  )
}

export default TransPortList