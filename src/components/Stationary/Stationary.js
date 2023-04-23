import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import ModalComp from './ModalCamp ';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { updateFees } from '../Redux/Slice/action';


const Stationary = ({ stationary }) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();


  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  }


  const handleModel = () => {
    setOpen(true);
    setUser(stationary);

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
        
      <tbody>

        {isActive ?
          <div style={{ width: "100%" }}>
            <center>
              <p>This student is not available at the moment:</p>
            </center>
          </div>
            
          :
          <tr>

           
            <td>{stationary.iname}</td>
            <td>{stationary.icate}</td>
            <td>{stationary.company}</td>
            <td>{stationary.board}</td>
            <td>{stationary.rate}</td>
            <td>{stationary.stock}</td>
            <td>{stationary.date}</td>
           
           

            <td>
            
              <button style={{
                backgroundColor: "gray",
                width: "100px",
                height: "30px",

              }}
                onClick={() => handleModel(stationary)}
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


          </tr>
        }

      </tbody>



    </>
  )
}

export default Stationary