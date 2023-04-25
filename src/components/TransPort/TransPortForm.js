import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import './trans.css'
import { useDispatch } from 'react-redux';
import { addTransport } from '../Redux/TransPortSlice/action';
import { RiArrowGoBackLine } from 'react-icons/ri';
import MainLayout from '../Layouts/MainLayout';
import { IoIosCreate } from 'react-icons/io';




const TransPortForm = () => {
    const dispatch = useDispatch();
    // const [class1, setClass1] = useState("");
    const [busname, setBusname] = useState("");
    const [stuname, setStuname] = useState("");
    const [stuaddress, setStuaddress] = useState("");
    const [fname, setFname] = useState("");
    const [drivername, setDrivername] = useState("");
    const [conductorname, setConductorname] = useState("");
    const [dvrivernob, setDvrivernob] = useState("");
    const [conductornob, setConductornob] = useState("");
    const [totalstdnt, setTotalstdnt] = useState("");
    const [busroute, setBusroute] = useState("");
    const [picpoint, setPicpoint] = useState("");
    const [distance, setDistance] = useState("");
    const [pictime, setPictime] = useState("");
    const [charge, setCharge] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (busname && drivername && conductorname && dvrivernob && conductornob && totalstdnt
             && busroute && stuname && stuaddress && fname && picpoint && distance && pictime  && charge
        ) {
            dispatch(addTransport({
                busname, drivername, conductorname, dvrivernob, conductornob,totalstdnt, busroute,
                stuname, stuaddress, fname,picpoint,distance,pictime,charge
            }
            ));
            setBusname("");
            setDrivername("");
            setConductorname("");
            setDvrivernob("");
            setConductornob("");
            setTotalstdnt("");
            setBusroute("");
            setStuname("");
            setStuaddress("");
            setFname("");
            setPicpoint("")
            setDistance("")
            setPictime("")
            setCharge("")
            // setSs("");


        }
    }



    return (
        <>
            <MainLayout />
            <Container style={{ width: "90%" }} >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add Transportation</h5></th>
            </tr>
          </thead>
        </Table>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <div className='table-div' >
                 
                    <Button className='table-btn' variant="light" >
                      <IoIosCreate />&nbsp;<Link to="/tranportlist">Go back</Link>
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

            


            <div style={{ padding: "40px", border: "1px solid", margin: "10px",marginTop:"50px" }}>

                <Form onSubmit={handleSubmit}>
                    <Container className="main-form">
                        <Row>

                            <div className="col-sm-4 mt-3 position-relative">
                                <label className="label">Bus Number</label>
                                <input type="number" className="form-control"
                                    value={busname}
                                    onChange={(event) => setBusname(event.target.value)} required
                                />
                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Driver Name</label>
                                <input type="text" className="form-control"
                                    value={drivername}
                                    onChange={(event) => setDrivername(event.target.value)} required
                                />
                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Conductor Name</label>
                                <input type="text" className="form-control"
                                    value={conductorname}
                                    onChange={(event) => setConductorname(event.target.value)} required
                                />

                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Conductor contact No.</label>
                                <input type="text" className="form-control"
                                    value={conductornob}
                                    onChange={(event) => setConductornob(event.target.value)} required
                                />

                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Driver Contact No.</label>
                                <input type="number" className="form-control"
                                    value={dvrivernob}
                                    onChange={(event) => setDvrivernob(event.target.value)} required
                                />

                            </div>


                            <div className="col-md-4  mt-3  position-relative">
                                <label className="label">Total Students</label>
                                <input type="text" className="form-control"
                                    value={totalstdnt}
                                    onChange={(event) => setTotalstdnt(event.target.value)} required
                                />

                            </div>

                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Bus Route</label>
                                <input type="number" className="form-control"
                                    value={busroute}
                                    onChange={(event) => setBusroute(event.target.value)} required
                                />

                            </div>




                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Student Name</label>
                                <input type="text" className="form-control"
                                    value={stuname}
                                    onChange={(event) => setStuname(event.target.value)}
                                />

                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Father Name</label>
                                <input type="text" className="form-control"
                                    value={fname}
                                    onChange={(event) => setFname(event.target.value)}
                                />
                            </div>





                            
                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Pic Point </label>
                                <input type="text" className="form-control"
                                    value={picpoint}
                                    onChange={(event) => setPicpoint(event.target.value)}
                                />
                            </div>
                            
                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Pic Time </label>
                                <input type="text" className="form-control"
                                    value={pictime}
                                    onChange={(event) => setPictime(event.target.value)}
                                />
                            </div>
                            
                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label"> Distance</label>
                                <input type="text" className="form-control"
                                    value={distance}
                                    onChange={(event) => setDistance(event.target.value)}
                                />
                            </div>
                            
                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Charges</label>
                                <input type="text" className="form-control"
                                    value={charge}
                                    onChange={(event) => setCharge(event.target.value)}
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

export default TransPortForm