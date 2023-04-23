import React ,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchsallerys } from '../../reducer/action/salleryAction'
import { fetchsallerys } from '../Redux/SalarySlice/action'
import Sallery from './Sallery'

import { Button, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillEye, AiFillSetting, AiOutlinePlusSquare } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { IoIosCreate} from 'react-icons/io'
import MainLayout from '../Layouts/MainLayout'




const SalleryList = () => {

  const dispatch = useDispatch()
  const sallerys = useSelector(state => state.sallerys.item)
  const sallerysStatus = useSelector(state => state.sallerys.status)
  const error = useSelector(state => state.sallerys.error)

  useEffect(() => {
    if (sallerysStatus === 'idle') {
      dispatch(fetchsallerys())
    }
  }, [sallerysStatus, dispatch])

  let content

  if (sallerysStatus === 'loading') {
    content = <div>Loading...</div>
  } else if (sallerysStatus === 'succeeded') {
    content = sallerys.map(sallery => <Sallery key={sallery.id} sallery={sallery} />)
  } else if (sallerysStatus === 'failed') {
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
                      <IoIosCreate />&nbsp;<Link to="/salleryform">Create</Link>
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

      <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Sallery Details</h5>

 <Table responsive>
 <table class="table table-bordered border-secondary">
      <thead>
        <tr>
   
         <th>Name</th>
          <th>Date</th>
          <th>Bank Name</th>
          <th>Ifsc code</th>
          <th>Account no</th>
          <th>Holder</th>
          <th>Sallery</th>
          <th>Leave</th>
          <th>Total sallery</th> 

            
        </tr>
      </thead>

    {content}

    </table>
    </Table>

    </div>


  
  
  
  </>
  )
}

export default SalleryList
