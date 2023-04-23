import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { Container, Form, Row,Button } from 'react-bootstrap';

const HolidayForm = () => {



    return (
        <>


            <MainLayout />
            <p className='dasfee'>Dasboard / Add Holiday Form</p>
            <div className='M-div'>
                <div className='dfelx'>
                    <Link to="/attendanceList ">
                        <button className='btns'>   <span className='spantext'><RiArrowGoBackLine /></span>Go Back</button>
                    </Link>
                    <button className='next-btn'>

                        <span className='spantext'><AiFillSetting /></span>
                        Setting
                    </button>
                    <button className='next-btn'>
                        <AiFillEdit />
                        Edit
                    </button>
                    <button className='next-btn'>
                        <span className='spantext'>   <AiFillDelete /></span>
                        Delete
                    </button>
                </div>
            </div>




            <div className='resultform'>
                <Form >
                    <Container className="main-form">
                        <Row>

                            <div className="col-sm-4 mt-3 position-relative">
                                <label className="label">Holiday Name</label>
                                <input type="text" className="form-control"

                                />
                            </div>

                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label">Date</label>
                                <input type="date" className="form-control"


                                />

                            </div>

                            <div className="col-md-4 mt-3  position-relative">
                                <label className="label"> Description</label>
                                <input type="text" className="form-control"

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

export default HolidayForm