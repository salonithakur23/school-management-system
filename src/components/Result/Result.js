import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import ModalComp from './ModalCamp ';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './result.css'


const Result = ({ result }) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();


  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  }


  const handleModel = () => {
    setOpen(true);
    setUser(result);

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
            <td>{result.subname}</td>
            <td>{result.sumassgn}</td>
            <td>{result.pd1}</td>
            <td>{result.pd2}</td>
            <td>{result.half}</td>
            <td>{result.halftotal}</td> 
            <td>{result.wintassgn}</td>
            <td>{result.pd3}</td>
            <td>{result.pd4}</td>
            <td>{result.annuexam}</td>
            <td>{result.total}</td>
            <td>{result.grntotal}</td>
            {/* <td>{result.grade}</td> */}

            {/* <td>
              <button style={{
                backgroundColor: "gray",
                width: "100px",
                height: "30px",

              }}
                onClick={() => handleModel(result)}
              >
                View
              </button>
            </td>
            {open && (
              <ModalComp
                open={open}
                setOpen={setOpen}
                {...user}
              />
            )} */}
          </tr>
     

      </tbody>



    </>
  )
}

export default Result