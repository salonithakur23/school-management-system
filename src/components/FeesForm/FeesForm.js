import React, { useEffect, useRef, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { addfees } from '../Redux/Slice/action';
// import '../../App.css'
import '../../App.css'
import MainLayout from '../Layouts/MainLayout';
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';

const FeesForm = () => {







    const dispatch = useDispatch();
    const [sname, setSname] = useState("");
    const [cname, setCname] = useState("");
    const [rollno, setRollno] = useState("");
    const [regno, setRegno] = useState("");
    const [regfee, setRegfee] = useState("");
    const [monfee, setMonfee] = useState("");
    const [examfee, setExamfee] = useState("");
    const [compufee, setCompufee] = useState("");
    const [paymethod, setPaymethod] = useState("");
    const [address, setAddress] = useState("");
    const [remark, setRemark] = useState("");
    const [fname, setFname] = useState("");
    const [mname, setMname] = useState("");
    const [busfee, setBusfee] = useState("");




    const handleSubmit = (event) => {
        event.preventDefault();
        if (sname && cname && rollno && regno && regfee && monfee && examfee && compufee
            && paymethod && address && remark && fname && mname && busfee) {
            dispatch(addfees({
                sname, cname, rollno, regno, regfee, monfee, examfee, compufee,
                paymethod, address, remark, fname, mname,busfee
            }
            ));
            setSname("");
            setCname("");
            setRollno("");
            setRegno("");
            setRegfee("");
            setMonfee("");
            setExamfee("");
            setCompufee("");
            setPaymethod("");
            setAddress("");
            setRemark("");
            setFname("");
            setMname("");
            setBusfee("");
        }
    };



    return (
        <>
            <MainLayout />

            <p className='dasfee'>Dasboard / Add Student Fees Form</p>
            <div className='M-div'>
                <div className='dfelx'>
                    <Link to="/feeslist ">
                        <button className='btns'>
                        <span style={{marginLeft:"-10px"}}><RiArrowGoBackLine/></span>
                            Go Back</button>
                    </Link>
                    <button className='next-btn'>
                        <span style={{marginLeft:"-10px"}}><AiFillSetting/></span>
                        Setting
                    </button>
                    <button className='next-btn'>
                        <AiFillEdit />
                        Edit
                    </button>
                    <button className='next-btn'>
                    <span style={{marginLeft:"-10px"}}><AiFillDelete /></span>

                     
                        Delete
                    </button>
                </div>
            </div>
            <div style={{ padding: "20px", border: "1px solid", margin: "10px", marginTop: "50px" }}>
                <Form onSubmit={handleSubmit}>
                    <Container className="main-form">
                        <Row>

                            <div className="col-sm-4 mt-3 position-relative">
                                <label className="form-label">Student Name</label>
                                <input type="text" className="form-control"
                                    value={sname}
                                    onChange={(event) => setSname(event.target.value)} 
                                />
                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Class Name</label>
                                <input type="text" className="form-control"
                                    value={cname}
                                    onChange={(event) => setCname(event.target.value)} 
                                />
                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Roll No</label>
                                <input type="text" className="form-control"
                                    value={rollno}
                                    onChange={(event) => setRollno(event.target.value)}
                                />

                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Registration Fees</label>
                                <input type="text" className="form-control"
                                    value={regfee}
                                    onChange={(event) => setRegfee(event.target.value)} 
                                />

                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Monthly Fees</label>
                                <input type="number" className="form-control"
                                    value={monfee}
                                    onChange={(event) => setMonfee(event.target.value)} 
                                />

                            </div>


                            <div className="col-md-4  mt-3  position-relative">
                                <label className="form-label">Examination Fees</label>
                                <input type="text" className="form-control"
                                    value={examfee}
                                    onChange={(event) => setExamfee(event.target.value)} 
                                />

                            </div>

                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Bus Fees</label>
                                <input type="number" className="form-control"
                                    value={busfee}
                                    onChange={(event) => setBusfee(event.target.value)} 
                                />

                            </div>




                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Computer Fees</label>
                                <input type="text" className="form-control"
                                    value={compufee}
                                    onChange={(event) => setCompufee(event.target.value)} 
                                />

                            </div>

                            <div className="col-md-4 mt-3 position-relative">
                                <label className="form-label">Payment Method</label>
                                <select className="form-select"
                                    value={paymethod}
                                    onChange={(event) => setPaymethod(event.target.value)} 
                                >

                                    <option>Choose</option>
                                    <option>GooglePay</option>
                                    <option>Cash </option>

                                </select>
                            </div>







                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Address</label>
                                <input type="text" className="form-control"
                                    value={address}
                                    onChange={(event) => setAddress(event.target.value)} 
                                />
                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Father NAme</label>
                                <input type="text" className="form-control"

                                    value={fname}
                                    onChange={(event) => setFname(event.target.value)} 
                                />
                            </div>

                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Mother name</label>
                                <input type="text" className="form-control"
                                    value={mname}
                                    onChange={(event) => setMname(event.target.value)} 

                                />
                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Remarks </label>
                                <input type="text" className="form-control"
                                    value={remark}
                                    onChange={(event) => setRemark(event.target.value)}

                                />
                            </div>




                            {/* 
                        <div className="col-md-4 mt-3  position-relative">
                            <label className="form-label">Mother's Occupation</label>
                            <input type="text" className="form-control"
                                value={moccupation} onChange={(event) => setMoccupation(event.target.value)}
                            />
                        </div>


                        <div className="col-md-4  mt-3 position-relative">
                            <label className="form-label">Present address</label>
                            <input type="text" className="form-control"
                                value={presentaddress} onChange={(event) => setPresentaddress(event.target.value)}
                            />
                        </div> */}


                            {/* <div className="col-md-4 mt-3  position-relative">
                <label className="form-label">Permanent address</label>
                <input type="text" className="form-control"
                  value={permanentaddress} onChange={(event) => setPermanentaddress(event.target.value)}
                />
              </div> */}


                            {/* <div className="col-md-4 mt-3 position-relative">
                <label className="form-label">City</label>
                <input type="text" className="form-control"
                  value={city} onChange={(event) => setCity(event.target.value)}
                />
              </div> */}


                            {/* <div className="col-md-4  mt-3  position-relative">
                <label className="form-label">Religion</label>
                <input type="text" className="form-control"
                  value={religion} onChange={(event) => setReligion(event.target.value)}
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















            {/* 
            <Container>
                <Row>

                    <div>
                        <div style={{ border: "solid 1px gray", width: "100%", height: "100%", marginTop: "30px" }}>
                            <Form

                                onSubmit={handleSubmit}>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label className='label'>Student Name</Form.Label>
                                        <Form.Control
                                            value={sname}
                                            onChange={(event) => setSname(event.target.value)}
                                            type='text'
                                        // placeholder='Student Name'
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label className='label'>Class Name</Form.Label>
                                        <Form.Control type='text'
                                            // placeholder='Class Name'
                                            value={cname}
                                            onChange={(event) => setCname(event.target.value)}

                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label className='label'>Roll No.</Form.Label>
                                        <Form.Control type='text'
                                            // placeholder='Roll No.'
                                            value={rollno}
                                            onChange={(event) => setRollno(event.target.value)}

                                        />
                                    </Form.Group>

                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label className='label'>Registration No.</Form.Label>
                                        <Form.Control type='text'
                                            // placeholder='Registration No.'
                                            value={regno}
                                            onChange={(event) => setRegno(event.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label className='label'>Registration Fee</Form.Label>
                                        <Form.Control type='text'
                                            // placeholder='Registration Fee'
                                            value={regfee}
                                            onChange={(event) => setRegfee(event.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label className='label'>Monthly Fee</Form.Label>
                                        <Form.Control type='text'

                                            value={monfee}
                                            onChange={(event) => setMonfee(event.target.value)}
                                        />
                                    </Form.Group>
                                </Row>


                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label className='label'>Examination Fee</Form.Label>
                                        <Form.Control type='text'

                                            value={examfee}
                                            onChange={(event) => setExamfee(event.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label className='label2'>Computer Class Fees</Form.Label>
                                        <Form.Control type='text'

                                            value={compufee}
                                            onChange={(event) => setCompufee(event.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label className='label'>Payment Method</Form.Label>
                                        <Form.Select defaultValue="Choose..."
                                            value={paymethod}
                                            onChange={(event) => setPaymethod(event.target.value)}
                                        >
                                            <option>Choose</option>
                                            <option>GooglePay</option>
                                            <option>Cash </option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>


                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label className='label'>Address</Form.Label>
                                        <Form.Control type='text'

                                            value={address}
                                            onChange={(event) => setAddress(event.target.value)}
                                        />
                                    </Form.Group>



                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label className='label'>Father Name</Form.Label>
                                        <Form.Control type='text'

                                            value={fname}
                                            onChange={(event) => setFname(event.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label className='label'>Mother Name</Form.Label>
                                        <Form.Control type='text'

                                            value={mname}
                                            onChange={(event) => setMname(event.target.value)}
                                        />
                                    </Form.Group>
                                </Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label className='remark'>Remarks</Form.Label>
                                    <Form.Control as="textarea" rows={3}
                                        value={remark}
                                        onChange={(event) => setRemark(event.target.value)}
                                    />
                                </Form.Group>

                                <Button className='sec' variant="secondary" type="submit"

                                >
                                    Submit
                                </Button>
                                <br />
                            </Form>
                        </div>
                    </div>

                </Row>
            </Container> */}


        </>
    )
}

export default FeesForm