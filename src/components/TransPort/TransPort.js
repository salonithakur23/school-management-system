import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
// import ModalComp from './ModalCamp ';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { updateFees } from '../Redux/Slice/action';
import ModalComp from './ModalCamp ';


const TransPort = ({ transport }) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();


  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  }


  const handleModel = () => {
    setOpen(true);
    setUser(transport);

  }
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete that user ?")) {
      try {
        setOpen(false);

      } catch (err) {
        console.log(err)
      }
    }

  }

  return (
    <>
         <p>{transport.class1}</p>
      <tbody>

        {isActive ?
          <div style={{ width: "100%" }}>
            <center>
              <p>This student is not available at the moment:</p>
            </center>
          </div>
            
          :
          <tr>

           
            <td>{transport.busname}</td>
            <td>{transport.drivername}</td>
            <td>{transport.conductorname}</td>
            <td>{transport.dvrivernob}</td>
            <td>{transport.conductornob}</td>
            <td>{transport.busroute}</td>
            <td>{transport.totalstdnt}</td>
            {/* <td>{transport.stuname}</td>
            <td>{transport.fname}</td>
            <td>{transport.stuaddress}</td> */}
           
           

            <td>
            
              <button style={{
                backgroundColor: "gray",
                width: "100px",
                height: "30px",

              }}
                onClick={() => handleModel(transport)}
              >
                View
              </button>
          
            </td>
            {open && (
              <ModalComp
                open={open}
                setOpen={setOpen}
                // handleDelete={handleDelete}
                {...user}
              />
            )}

{/*           
            <td>
              <button onClick={handleClick} >Active</button>
            </td> */}
          </tr>
        }

      </tbody>



    </>
  )
}

export default TransPort
// . handleUpdateClick(fees.id, updateFees)