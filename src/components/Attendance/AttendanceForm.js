import React, {  useState } from 'react'
import MainLayout from '../Layouts/MainLayout'
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import '../../App.css'
import './att.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { addAttendace } from '../Redux/Attendance/action';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { Container, Row } from 'react-bootstrap';



const AttendanceForm = () => {
    const dispatch = useDispatch();
    const [rollno, setRollno] = useState("");
    const [stuname, setStuname] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();  
        if (rollno && stuname && date ) {
            dispatch(addAttendace({
                rollno, stuname,date
            }
            ));
            setRollno("");
            setStuname("");
            setDate("");
           
        }
    }
    return (
        <>
            <MainLayout />
            <p className='dasfee'>Dasboard / Add Student  Attendance Form</p>
            <div className='M-div'>
                <div className='dfelx'>
                    <Link to="/attendanceList ">
                    <button className='btns'>   <span  className='spantext'><RiArrowGoBackLine/></span>Go Back</button>
                    </Link>
                    <button className='next-btn'>
                     
                        <span  className='spantext'><AiFillSetting /></span>
                        Setting
                    </button>
                    <button className='next-btn'>
                        <AiFillEdit />
                        Edit
                    </button>
                    <button className='next-btn'>
                    <span  className='spantext'>   <AiFillDelete /></span>
                        Delete
                    </button>
                </div>
            </div>




            <div className='resultform'>
                <Form onSubmit={handleSubmit}>
                    <Container className="main-form">
                        <Row>

                            <div className="col-sm-4 mt-3 position-relative">
                                <label className="label">Student Name</label>
                                <input type="text" className="form-control"
                                    value={rollno}
                                    onChange={(event) => setRollno(event.target.value)}
                                />
                            </div>

                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Class Name</label>
                                <input type="text" className="form-control"
                                     value={stuname}
                                     onChange={(event) => setStuname(event.target.value)}
                                />
                            </div>

                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Date</label>
                                <input type="date" className="form-control"
                                  value={date}
                                  onChange={(event) => setDate(event.target.value)}
                                  
                                />

                            </div>
                            {/* <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Registration Fees</label>
                                <input type="text" className="form-control"
                                
                                />

                            </div> */}
                        </Row>
                    </Container>

                    <br />
                    <center>
                        <Button className="stu_btn"
                            variant="success"
                            type="submit">
                            Submit
                        </Button>
                    </center>

                </Form>
            </div>




            {/* <div className='At-Form'>
                <Form  onSubmit={handleSubmit}>
                    
                    <Form.Group className="mb-3 At-Input" controlId="formBasicEmail">
                        <Form.Label className='At-Labal'>Roll No.</Form.Label>
                        <Form.Control type="text" 
                         value={rollno}
                         onChange={(event) => setRollno(event.target.value)}
                         />
                    </Form.Group>

                    <Form.Group className="mb-3 At-Input" controlId="formBasicPassword">
                        <Form.Label className='At-Labal2'>Student Name</Form.Label>
                        <Form.Control type="text" 
                        value={stuname}
                        onChange={(event) => setStuname(event.target.value)}
                       
                         />
                    </Form.Group>
               
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div> */}
            

        </>
    )
}

export default AttendanceForm