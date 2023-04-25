import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
// import './trans.css'
import { useDispatch } from 'react-redux';
import { addStationary } from '../Redux/Stationary/action';
import { RiArrowGoBackLine } from 'react-icons/ri';
import './stas.css'
import MainLayout from '../Layouts/MainLayout';
import { IoIosCreate } from 'react-icons/io';




const StationaryForm = () => {
    const dispatch = useDispatch();
    const [iname, setIname] = useState("");
    const [icate, setIcate] = useState("");
    const [company, setCompany] = useState("");
    const [board, setBoard] = useState("");
    const [rate, setRate] = useState("");
    const [stock, setStock] = useState("");
    const [date, setDate] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (iname && icate && company && board && rate && stock
             && date 
        ) {
            dispatch(addStationary({
                iname, icate, company, board, rate,stock, date,              
            }
            ));
            setIname("");
            setIcate("");
            setCompany("");
            setBoard("");
            setRate("");
            setStock("");
            setDate("");
        }
    }



    return (
        <>  
        <MainLayout />
        <Container style={{ width: "90%" }} >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add Stationary Form</h5></th>
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
                      <IoIosCreate />&nbsp;<Link to="/stationarylist">Go Back</Link>
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


            {/* <p className='dasfee'>Dasboard / Add Stationary Form</p>
            <div className='M-div'>
                <div className='dfelx'>
                    <Link to="/stationarylist ">
                    
                        <button className='btns'>
                            <span style={{marginLeft:"-10px"}}><RiArrowGoBackLine/></span>
                             Go Back</button>
                    </Link>
                    <button className='next-btn'>
                     <span style={{ marginLeft: "-10px" }}>  <AiFillSetting /></span>
                        Setting
                    </button>
                    <button className='next-btn'>
                        <AiFillEdit />
                        Edit
                    </button>
                    <button className='next-btn'>
                     <span style={{ marginLeft: "-10px" }}><AiFillDelete /></span>
                        Delete
                    </button>
                </div>
            </div> */}



            <div style={{ padding: "40px", border: "1px solid", margin: "10px",marginTop:"50px" }}>

                <Form
                 onSubmit={handleSubmit}
                 >
                    <Container className="main-form">
                        <Row>

                            <div className="col-sm-4 mt-3 position-relative">
                                <label className="form-label">Item Name</label>
                                <input type="text" className="form-control"
                                    value={iname}
                                    onChange={(event) => setIname(event.target.value)} required
                                />
                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Item Category</label>
                                <input type="number" className="form-control"
                                    value={icate}
                                    onChange={(event) => setIcate(event.target.value)} required
                                />
                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Company Name</label>
                                <input type="text" className="form-control"
                                    value={company}
                                    onChange={(event) => setCompany(event.target.value)} required
                                />

                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Board Name</label>
                                <input type="text" className="form-control"
                                    value={board}
                                    onChange={(event) => setBoard(event.target.value)} required
                                />

                            </div>


                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Rate</label>
                                <input type="number" className="form-control"
                                    value={rate}
                                    onChange={(event) => setRate(event.target.value)} required
                                />

                            </div>


                            <div className="col-md-4  mt-3  position-relative">
                                <label className="form-label">stock</label>
                                <input type="number" className="form-control"
                                    value={stock}
                                    onChange={(event) => setStock(event.target.value)} required
                                />

                            </div>

                          
                            <div className="col-md-4 mt-3  position-relative">
                                <label className="form-label">Item Received Date</label>
                                <input type="date" className="form-control"
                                    value={date}
                                    onChange={(event) => setDate(event.target.value)} required
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

export default StationaryForm