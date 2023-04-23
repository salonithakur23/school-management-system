import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table } from 'react-bootstrap'
import ModalCamp from './ModalCamp '
import MainLayout from '../Layouts/MainLayout'
import '../../App.css'
import { Link } from 'react-router-dom'
import { AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai'
import { RiArrowGoBackFill, RiArrowGoBackLine } from "react-icons/ri";
import { MdCreateNewFolder } from 'react-icons/md'
import Stationary from './Stationary'
import { fetchStationary } from '../Redux/Stationary/action'



const StationaryList = () => {
  const dispatch = useDispatch()
  const stationarys = useSelector(state => state.stationarys.data)
  const stationarysStatus = useSelector(state => state.stationarys.status)
  const error = useSelector(state => state.stationarys.error)

  useEffect(() => {
    if (stationarysStatus === 'idle') {
      dispatch(fetchStationary())
    }
  }, [stationarysStatus, dispatch])

  let content

  if (stationarysStatus === 'loading') {
    content = <div>Loading...</div>
  } else if (stationarysStatus === 'succeeded') {
    content = stationarys.map(stationary => <Stationary key={stationary.id} stationary={stationary} />)
  } else if (stationarysStatus === 'failed') {
    content = <div>{error}</div>
  }



  return (
    <>
      <MainLayout />
      <p className='dasfee'>Dasboard /View TransPortation</p>
      <div className='M-div'>
        <div className='dfelx'>
          
          <Link to="/stationaryform ">
        
            <button className='btns'>+ Create</button>
          
          </Link>
          <button className='next-btn'>
          <span style={{ marginLeft: "-10px" }}>  <AiFillSetting /></span>
            Setting
          </button>
          <button className='next-btn'>
            <AiFillEdit />
            Edit
          </button>
          <button className='next-btn'>
          <span style={{ marginLeft: "-10px" }}><AiFillDelete /></span>
            Delete
          </button>
        </div>
      </div>
    


      <p className='add'
      > View Stationary Details</p>
      <br />

      <div className='post-table'>
        <h2 className="w3-center w3-flat-midnight-blue
         w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3"> Stationary   Details</h2>

        <h1></h1>
        <Table responsive striped bordered hover>
          <table class="table table-bordered border-secondary">
            <thead>
            <tr>
                <th>Item Name</th>
                <th>Item Category</th>
                <th>Company Name</th>
                <th>Board Name</th>
                <th>Rate.</th>
                <th>Stock</th>
                <th>Item Received Date</th>
                 
              </tr>
            </thead>

            {content}

          </table>
        </Table>
      </div>




  


    </>
  )
}

export default StationaryList