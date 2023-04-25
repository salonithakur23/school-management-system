import React, { useEffect, useState } from 'react'
import MainLayout from '../Layouts/MainLayout'
import { Link } from 'react-router-dom';
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { fetchAttendance } from '../Redux/Attendance/action';
import { useSelector, useDispatch } from 'react-redux'
import { Button, Container, Form, Row, Table } from 'react-bootstrap';
import Attendance from './Attendance'
import './att.css'
import { IoIosCreate } from 'react-icons/io';

const AttendanceList = () => {

    const [name, setName] = useState("")

    const [showtext, setShowtext] = useState("View Class Attendens")
    const handletext = (e) => {
        const getvalue = e.target.value;

        if (getvalue == 1) {
            const show = "Nurssury Class"
            setShowtext(show);

        } else if (getvalue == 2) {
            const show = "L.K.G Class"
            setShowtext(show);
        } else if (getvalue == 3) {
            const show = "U.K.G Class"
            setShowtext(show);
        } else if (getvalue == 4) {
            const show = "Ist Class"
            setShowtext(show);
        } else if (getvalue == 5) {
            const show = "2nd Class."
            setShowtext(show);
        } else if (getvalue == 6) {
            const show = "3rd Class"
            setShowtext(show);
        } else if (getvalue == 7) {
            const show = "4th Class"
            setShowtext(show);
        } else if (getvalue == 8) {
            const show = "5th Class"
        }

        else {
            const show = "View Class Attendens"
            setShowtext(show);
        }

    }


    const dispatch = useDispatch()
    const attendances = useSelector(state => state.attendances.data)
    const attendancesStatus = useSelector(state => state.attendances.status)
    const error = useSelector(state => state.attendances.error)

    useEffect(() => {
        if (attendancesStatus === 'idle') {
            dispatch(fetchAttendance())
        }
    }, [attendancesStatus, dispatch])

    let content

    if (attendancesStatus === 'loading') {
        content = <div>Loading...</div>
    } else if (attendancesStatus === 'succeeded') {
        content = attendances.map(attendance => <Attendance key={attendance.id} attendance={attendance} />)
    } else if (attendancesStatus === 'failed') {
        content = <div>{error}</div>
    }

    return (
        <>
            <MainLayout />
            <Container style={{ width: "90%" }} >
                <Table striped bordered hover className='main-table'>
                    <thead>
                        <tr>
                            <th><h5><AiFillDashboard /> &nbsp; Dasboard / View Student  Attendance Page</h5></th>
                        </tr>
                    </thead>
                </Table>
                <Row
                >
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <div className='table-div'>

                                        <Button className='table-btn' variant="light" >
                                            <IoIosCreate />&nbsp;<Link to="/attendance">Create</Link>
                                        </Button>

                                        <Button className='table-btn' variant="light" >
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


          
           
            <div className='d-flex'>
                <div style={{ width: "20%", height: "20px", marginLeft: "50px", marginTop: "30px" }}>
                  
                    <input
                        style={{ height: "40px", marginLeft: "-20px" }}
                        type='text'
                        placeholder='Class Teacher Name'
                    />

                    <div className='show'>

                    </div>
                </div>

                <div style={{ width: "20%", height: "20px", marginTop: "30px" }}>
                  
                    <Form.Select
                        onChange={(e) => handletext(e)}
                    >
                        <option>Choose</option>
                        <option value="1">Nursury Class</option>
                        <option value="2">L.K.G. Class</option>
                        <option value="3">U.K.G. Class</option>
                        <option value="4">Ist Class</option>
                        <option value="5">2nd  Class</option>
                        <option value="6">3rd Class</option>
                        <option value="7">4th Class </option>
                        <option value="8">5th Class </option>
                    </Form.Select>
                  



                </div>


                <input style={{ width: "20%", height: "40px", marginTop: "30px", marginLeft: "30px" }}
                    type="date"
                />
            </div>
            <div style={{
                width: "90%",
                height: "100%", border: "solid 2px gray", margin: "auto", marginTop: "70px"
            }}>     <center>
                    <div className='showtext' style={{ marginLeft: "-80px" }}>{showtext}</div>
                </center>
                <Table responsive style={{ marginTop: "40px" }}>
                    <table class="table table-bordered border-secondary">
                        <thead>
                            <tr>
                                <th>Roll No</th>
                                <th>Student Name</th>
                                <th>Date</th>
                                <th>Attendance Status</th>


                            </tr>
                        </thead>

                        {content}
                    </table>
                    <center>
                        <Button

                        >Save Detals</Button>

                    </center>
                </Table>

                <br />

            </div>

        </>
    )
}

export default AttendanceList