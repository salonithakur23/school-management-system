import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { fetchfFeses } from '../Slice/action'
import { fetchfFeses } from '../Redux/Slice/action'
import Fees from './Fees'
import { Table } from 'react-bootstrap'
import ModalCamp from './ModalCamp '
import MainLayout from '../Layouts/MainLayout'
import '../../App.css'
import { Link } from 'react-router-dom'
import { AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai'



const FeesList = () => {
  const dispatch = useDispatch()
  const feeses = useSelector(state => state.feeses.data)
  const feesesStatus = useSelector(state => state.feeses.status)
  const error = useSelector(state => state.feeses.error)

  useEffect(() => {
    if (feesesStatus === 'idle') {
      dispatch(fetchfFeses())
    }
  }, [feesesStatus, dispatch])

  let content

  if (feesesStatus === 'loading') {
    content = <div>Loading...</div>
  } else if (feesesStatus === 'succeeded') {
    content = feeses.map(fees => <Fees key={fees.id} fees={fees} />)
  } else if (feesesStatus === 'failed') {
    content = <div>{error}</div>
  }



  return (
    <>
      <MainLayout />
      <p className='dasfee'>Dasboard /View Student Fees Details</p>
      <div className='M-div'>
        <div className='dfelx'>
          <Link to="/fees ">
            <button className='btns'>+ Create</button>
          </Link>
          <button className='next-btn'>
           <span style={{marginLeft:"-10px"}}> <AiFillSetting /></span>
            Setting
          </button>
          <button className='next-btn'>
           <span style={{marginLeft:"-10px"}}>  <AiFillEdit /></span>
           
            Edit
          </button>
          <button className='next-btn'>
           <span style={{marginLeft:"-10px"}}><AiFillDelete /></span>
           
            Delete
          </button>
        </div>
      </div>


      <p className='add'
      > View Student Fees Details</p>
      <br />

      <div className='post-table'>
        <h2 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Student Fees  Details</h2>

        <h1></h1>
        <Table responsive striped bordered hover>
          <table class="table table-bordered border-secondary">
            <thead>
            <tr>
                <th>Student Name</th>
                <th>Class Name</th>
                <th>Rollno</th>
                <th>RG no</th>
                <th>RG Fees</th>
                <th>Payment Mehod</th>
                {/* <th>Address</th> */}
                {/* <th>Father Name</th>
                <th>Mother Name</th> */}
                <th>Veiw</th>
                <th>Active</th>
              </tr>
            </thead>

            {content}

          </table>
        </Table>
      </div>








      {/* <p className='add'
      > View Student Fees Details</p>
      <br />
      <div className="container-fluid">
        <div className='row border2'>      
        <div className='tble'>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Class Name</th>
                <th>Rollno</th>
                <th>RG no</th>
                <th>RG Fees</th>
                <th>Payment Mehod</th>
               
                <th>Veiw</th>
                <th>Active</th>
              </tr>
            </thead>
            {content}

          </Table>
          </div>
        </div>
      </div> */}


    </>
  )
}

export default FeesList