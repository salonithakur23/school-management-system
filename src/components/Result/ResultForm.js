import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTransport } from '../Redux/TransPortSlice/action';
import { addResult } from '../Redux/ResultSlice/action';
import { RiArrowGoBackLine } from 'react-icons/ri';
import './result.css'
import MainLayout from '../Layouts/MainLayout';
import { IoIosCreate } from 'react-icons/io';




const ResultForm = () => {
    const dispatch = useDispatch();
    const [subname, setSubname] = useState("");
    const [sumassgn, setSumassgn] = useState("");
    const [pd1, setPd1] = useState("");
    const [pd2, setPd2] = useState("");
    const [half, setHalf] = useState("");
    const [halftotal, setHalftotal] = useState("");
    const [wintassgn, setWintassgn] = useState("");
    const [pd3, setPd3] = useState("");
    const [pd4, setPd4] = useState("");
    const [annuexam, setAnnuexam] = useState("");
    const [total, setTotal] = useState("");
    const [grntotal, setGrntotal] = useState("");
    const [grade, setGrade] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (subname && sumassgn && pd1 && pd2 && half &&
            halftotal && wintassgn
            && pd3 && pd4 && annuexam && total && grntotal && grade) {
            dispatch(addResult({
                subname, sumassgn, pd1, pd2, half,
                halftotal, wintassgn,
                pd3, pd4, annuexam, total, grntotal, grade
            }
            ));
            setSubname("");
            setSumassgn("");
            setPd1("");
            setPd2("");
            setHalf("");
            setHalftotal("");
            setWintassgn("");
            setPd3("");
            setPd4("");
            setAnnuexam("");
            setTotal("");
            setGrntotal("");
            setGrade("");


        }
    }



    return (
        <>
            <MainLayout />
            <Container style={{ width: "90%" }} >
                <Table striped bordered hover className='main-table'>
                    <thead>
                        <tr>
                            <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add Result Information</h5></th>
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
                                            <IoIosCreate />&nbsp;<Link to="/resultlist">Go Back</Link>
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



            <div className='resultform'

            >

                <Form onSubmit={handleSubmit}>
                    <Container className="main-form">
                        <Row>

                            <div className="col-sm-4 mt-3 position-relative">
                                <label className="form-label">Subject Name</label>
                                <input type="text" className="form-control"
                                    value={subname}
                                    onChange={(event) => setSubname(event.target.value)} required
                                />
                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Summer Asgin.</label>
                                <input type="text" className="form-control"
                                    value={sumassgn}
                                    onChange={(event) => setSumassgn(event.target.value)} required
                                />
                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Unit Ist </label>
                                <input type="text" className="form-control"
                                    value={pd1}
                                    onChange={(event) => setPd1(event.target.value)} required
                                />

                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Unit IInd</label>
                                <input type="text" className="form-control"
                                    value={pd2}
                                    onChange={(event) => setPd2(event.target.value)} required
                                />

                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Half Yearly.</label>
                                <input type="text" className="form-control"
                                    value={half}
                                    onChange={(event) => setHalf(event.target.value)} required
                                />

                            </div>


                            <div className="col-md-4  mt-3  position-relative">
                                <label className="form-label">Total </label>
                                <input type="text" className="form-control"
                                    value={halftotal}
                                    onChange={(event) => setHalftotal(event.target.value)} required
                                />

                            </div>

                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Winter Assign.</label>
                                <input type="text" className="form-control"
                                    value={wintassgn}
                                    onChange={(event) => setWintassgn(event.target.value)} required
                                />

                            </div>




                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Unit IIIrd</label>
                                <input type="text" className="form-control"
                                    value={pd3}
                                    onChange={(event) => setPd3(event.target.value)} required
                                />

                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Unit-IVth</label>
                                <input type="text" className="form-control"
                                    value={pd4}
                                    onChange={(event) => setPd4(event.target.value)} required
                                />

                            </div>





                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Annual Exam</label>
                                <input type="text" className="form-control"
                                    value={annuexam}
                                    onChange={(event) => setAnnuexam(event.target.value)} required
                                />

                            </div>
                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Total</label>
                                <input type="text" className="form-control"
                                    value={total}
                                    onChange={(event) => setTotal(event.target.value)} required
                                />

                            </div>
                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Grand Total</label>
                                <input type="text" className="form-control"
                                    value={grntotal}
                                    onChange={(event) => setGrntotal(event.target.value)} required
                                />

                            </div>
                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Grade</label>
                                <input type="text" className="form-control"
                                    value={grade}
                                    onChange={(event) => setGrade(event.target.value)} required
                                />

                            </div>
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
























        </>
    )
}

export default ResultForm