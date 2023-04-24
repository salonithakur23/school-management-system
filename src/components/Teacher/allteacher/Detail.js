import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ShowList from "./ShowList";
import { useNavigate } from "react-router-dom";
import ModalComp from './ModalCamp ';









const Detail = ({ detail }) => {

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate("");

  


  const handleModel = () => {
    setOpen(true);
    setUser(detail);

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

          {/* <div>
            <img width={"50%"} src={detail.image} />
          </div> */}

          <td>{detail.firstname1}</td>
          <td>{detail.lastname1}</td>
          <td>{detail.join}</td>
          <td>{detail.email}</td>
          <td>{detail.qufication}</td>
          <td>{detail.experience}</td>
          {/* <td>{detail.special}</td>
          <td>{detail.lastquali}</td> */}
          <td>{detail.marriage}</td>
          {/* <td>{detail.dob1}</td>
            <td>{detail.gender1}</td>
            <td>{detail.board1}</td> 
            <td>{detail.aadhar1}</td>
            <td>{detail.contact1}</td>
            <td>{detail.category1}</td>
            <td>{detail.father1}</td>
            <td>{detail.mother1}</td>
            <td>{detail.foccupation1}</td>
            <td>{detail.moccupation1}</td>
            <td>{detail.address1}</td>
            <td>{detail.religion1}</td>
            <td>{detail.city1}</td> */}



          <td>

            <button style={{
              backgroundColor: "gray",
              width: "100px",
              height: "30px",

            }}
              onClick={() => handleModel(detail)}
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
      </tbody>
    </>






  );
};

export default Detail;
