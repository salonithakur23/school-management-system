import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTransport } from '../Redux/TransPortSlice/action';
import { addResult } from '../Redux/ResultSlice/action';
import { RiArrowGoBackLine } from 'react-icons/ri';
import './result.css'




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


            <p className='dasfee'>Dasboard / Add Result Information</p>
            <div className='M-div'>
                <div className='dfelx'>
                    <Link to="/resultlist ">
                        <button className='btns'>
                            <span className='spantext' ><RiArrowGoBackLine /></span>
                            Go Back</button>
                    </Link>
                    <button className='next-btn'>

                        <span className='spantext'>  <AiFillSetting /></span>
                        Setting
                    </button>
                    <button className='next-btn'>
                        <AiFillEdit />
                        Edit
                    </button>
                    <button className='next-btn'>
                        <span className='spantext'><AiFillDelete /></span>
                        Delete
                    </button>
                </div>
            </div>

            <div className='resultform'
          
             >

                <Form onSubmit={handleSubmit}>
                    <Container className="main-form">
                        <Row>

                            <div className="col-sm-4 mt-3 position-relative">
                                <label className="label">Subject Name</label>
                                <input type="text" className="form-control"
                                    value={subname}
                                    onChange={(event) => setSubname(event.target.value)} required
                                />
                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Summer Asgin.</label>
                                <input type="text" className="form-control"
                                    value={sumassgn}
                                    onChange={(event) => setSumassgn(event.target.value)} required
                                />
                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Unit Ist </label>
                                <input type="text" className="form-control"
                                    value={pd1}
                                    onChange={(event) => setPd1(event.target.value)} required
                                />

                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Unit IInd</label>
                                <input type="text" className="form-control"
                                    value={pd2}
                                    onChange={(event) => setPd2(event.target.value)} required
                                />

                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Half Yearly.</label>
                                <input type="text" className="form-control"
                                    value={half}
                                    onChange={(event) => setHalf(event.target.value)} required
                                />

                            </div>


                            <div className="col-md-4  mt-3  position-relative">
                                <label className="label">Total </label>
                                <input type="text" className="form-control"
                                    value={halftotal}
                                    onChange={(event) => setHalftotal(event.target.value)} required
                                />

                            </div>

                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Winter Assign.</label>
                                <input type="text" className="form-control"
                                    value={wintassgn}
                                    onChange={(event) => setWintassgn(event.target.value)} required
                                />

                            </div>




                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Unit IIIrd</label>
                                <input type="text" className="form-control"
                                    value={pd3}
                                    onChange={(event) => setPd3(event.target.value)} required
                                />

                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Unit-IVth</label>
                                <input type="text" className="form-control"
                                    value={pd4}
                                    onChange={(event) => setPd4(event.target.value)} required
                                />

                            </div>





                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Annual Exam</label>
                                <input type="text" className="form-control"
                                    value={annuexam}
                                    onChange={(event) => setAnnuexam(event.target.value)} required
                                />

                            </div>
                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Total</label>
                                <input type="text" className="form-control"
                                    value={total}
                                    onChange={(event) => setTotal(event.target.value)} required
                                />

                            </div>
                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Grand Total</label>
                                <input type="text" className="form-control"
                                    value={grntotal}
                                    onChange={(event) => setGrntotal(event.target.value)} required
                                />

                            </div>
                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Grade</label>
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