import React,{useEffect} from 'react'
import MainLayout from '../Layouts/MainLayout'
import { Button, Container,Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit,  } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { fetchleaves } from '../Redux/LeaveSlice/action'
import Leave from './Leave'
import { Link }  from "react-router-dom"
import { IoIosCreate } from "react-icons/io";





const LeaveList = () => {

  const dispatch = useDispatch()
  const leaves = useSelector(state => state.leaves.item)
  const leavesStatus = useSelector(state => state.leaves.status)
  const error = useSelector(state => state.leaves.error)

 

  useEffect(() => {
    if (leavesStatus === 'idle') {
      dispatch(fetchleaves())
    }
  }, [leavesStatus, dispatch])

  let content

  if (leavesStatus === 'loading') {
    content = <div>Loading...</div>
  } else if (leavesStatus === 'succeeded') {
    content = leaves.map(leave => <Leave key={leave.id} leave={leave} />)
  } else if (leavesStatus === 'failed') {
    content = <div>{error}</div>
  }



  return (

    <>
    <MainLayout />

    <Container style={{ width: "90%" }} >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp; Dashboard/ Leave-details</h5></th>
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
                      <IoIosCreate />&nbsp;<Link to="/leaveform">Create</Link>
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


      <div className="post-table">

<h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Leave Details</h5>

<Table responsive>
 <table class="table table-bordered border-secondary">
      <thead>
        <tr>
        
         <th>Name</th>
          <th>Class</th>
          <th>Father</th>
          <th>Date</th>
          <th>Reason</th>
          <th>Checked by</th>
     </tr>
      </thead>

    {content}

    </table>
    </Table>

    </div>

    
    
    
    </>

  )
}
export default LeaveList
