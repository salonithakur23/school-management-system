import React,{useState} from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Button, Container, Row, Table } from 'react-bootstrap';
// import '../../style/main.css';
import { AiFillDashboard,AiFillEdit,AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
// import { addleave } from '../../reducer/action/leaveAction';
import { addleave } from '../Redux/LeaveSlice/action';
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri";
import { IoIosCreate } from 'react-icons/io';


const LeaveForm = () => {

    const dispatch = useDispatch();
   
    const [name1, setName1] = useState("");
    const [class1, setClass1] = useState("");
    const [father, setFather] = useState("");
    const [date2, setDate2] = useState("");
    const [reason, setReason] = useState("");
    const [check, setCheck] = useState("");
    const navigate = useNavigate("")
   
 
   const handleSubmit = (event) => {
      event.preventDefault();
      if (name1 && class1 && father && date2 && reason && check ) {
        dispatch(addleave({
            name1, class1, father, date2, reason, check }));
      
         setName1("");
         setClass1("");
         setFather("");
         setDate2("");
         setReason("");
         setCheck("");

       

        //  navigate="/leavelist"
         
         }
    };
  


    return (

        <>
            <MainLayout />


            <Container style={{ width: "90%" }} >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp; Dashboard / Leave-Application</h5></th>
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
                      <IoIosCreate />&nbsp;<Link to="/leavelist">Go Back</Link>
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

          

           


            <div className='form-div' >
                <Container>

                    <form className="row g-4 p-3 registration-form" onSubmit={handleSubmit}>

                        <div class="col-md-4 position-relative">
                            <label className="label">Name</label>
                            <input type="text" class="form-control"
                                   value={name1} onChange={(event) => setName1(event.target.value)}
                                 />
                      
                        </div>

                        <div class="col-md-4 position-relative">
                            <label className="label">Class</label>
                            <input type="text" class="form-control"
                                   value={class1} onChange={(event) => setClass1(event.target.value)}
                                 />

                        </div>


                        <div class="col-md-4 position-relative">
                            <label className="label">Father name</label>
                            <input type="text" class="form-control"
                               value={father} onChange={(event) => setFather(event.target.value)}
                            />

                        </div>

                        <div class="col-md-4 position-relative">
                            <label className="label">Date </label>
                            <input type="text" class="form-control"
                               value={date2} onChange={(event) => setDate2(event.target.value)}
                            />

                        </div>

                        <div class="col-md-4 position-relative">
                            <label className="label">Check by</label>
                            <input type="text" class="form-control"
                               value={check} onChange={(event) => setCheck(event.target.value)}
                            />

                        </div>


                        <div class="mb-4 ">
                            <label for="exampleFormControlTextarea1" >Reason for leave</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                             value={reason} onChange={(event) => setReason(event.target.value)}
                            ></textarea>
                        </div>



                        <center>
                       
                            <Button className="stu_btn"
                                variant="success"
                                type="submit"
                               >
                                Submit
                            </Button>
                        
                        </center>

                    </form>



                </Container>


            </div>


        </>

    )
}

export default LeaveForm
