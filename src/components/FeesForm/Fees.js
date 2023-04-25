import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import ModalComp from './ModalCamp ';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { updateFees } from '../Redux/Slice/action';


const Fees = ({ fees }) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();


 


  const handleModel = () => {
    setOpen(true);
    setUser(fees);

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
          <tr>

            {/* <td>{fees.id}</td> */}
            <td>{fees.sname}</td>
            <td>{fees.cname}</td>
            <td>{fees.rollno}</td>
            <td>{fees.regno}</td>
            <td>{fees.compufee}</td>
            <td>{fees.paymethod}</td>
            {/* <td>{fees.regfee}</td>
            <td>{fees.monfee}</td>
            <td>{fees.examfee}</td>
            <td>{fees.address}</td>
            <td>{fees.remark}</td>
            <td>{fees.fname}</td>
            <td>{fees.mname}</td> */}

            <td>
              {/* <Link to='/vi'> */}
              <button style={{
                backgroundColor: "gray",
                width: "100px",
                height: "30px",

              }}
                onClick={() => handleModel(fees)}
              >
                View
              </button>
              {/* </Link> */}
            </td>
            {open && (
              <ModalComp
                open={open}
                setOpen={setOpen}
                // handleDelete={handleDelete}
                {...user}
              />
            )}

            {/* <td>
            <Link to={`/update/${fees.id}`}>
            <button >Update</button>
            </Link>
            
            </td> */}
          
          </tr>
       

      </tbody>



    </>
  )
}

export default Fees
// . handleUpdateClick(fees.id, updateFees)