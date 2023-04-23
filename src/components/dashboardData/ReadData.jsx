import React, { useEffect, useState } from "react";
// import "../Pages/pages.css";
import { useNavigate, useParams } from "react-router-dom";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
// import { db } from "../../firebase";
import { db } from "../firebase";
import { Button, Container, Table, Col, Row } from "react-bootstrap";
// import ProductForm from "../Pages/ProductForm";
import { GrFormView } from "react-icons/gr";
import { AiFillEdit, AiOutlineFolderView } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import ModalDashboard from "./ModalDashboard";
import './das.css'
// import { DeleteCustomer, getCustomer } from "../redux/customerSlice/action";
import { useDispatch, useSelector } from 'react-redux';

function MachineList() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { id } = useParams()







  const handleModal = (item) => {
    setOpen(true);
    setUser(item);
    
  };
  const handleAddData = () => {
    navigate("/add-data");
  }

  console.log(data);

  return (
    <>
     <h1></h1>
    </>
  );
}
export default MachineList;
