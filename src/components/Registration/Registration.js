import React, { useState } from 'react'
import MainLayout from '../Layouts/MainLayout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai'
import { Container, Col, Row, Card } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import './Reg.css'
import { addfees } from '../Redux/Slice/action';
import ShowDetails from './ShowDetails';

const Registration = () => {

    const [showtext, setShowtext] = useState("View Classes Fess")
    const handletext = (e) => {
        const getvalue = e.target.value;

        if (getvalue == 1) {
            const show = "Nurssury ClassFees 600 Rs."
            setShowtext(show);

        } else if (getvalue == 2) {
            const show = "Nurssury ClassFees 700 Rs."
            setShowtext(show);
        } else if (getvalue == 3) {
            const show = "Ist ClassFees 800 Rs."
            setShowtext(show);
        } else if (getvalue == 4) {
            const show = "2nd ClassFees 1000 Rs."
            setShowtext(show);
        } else if (getvalue == 5) {
            const show = "3rd ClassFees 1200 Rs."
            setShowtext(show);
        } else if (getvalue == 6) {
            const show = "4th ClassFees 1500 Rs."
            setShowtext(show);
        } else if (getvalue == 7) {
            const show = "5th ClassFees 1800 Rs."
            setShowtext(show);
        }

        else {
            const show = "View Classes Fess"
            setShowtext(show);
        }

    }



    const [bodyText, setBodyText] = useState("");
    const dispatch = useDispatch();
    const { loading, fees, edit, body } = useSelector((state) => ({ ...state.feeses }))
    const [id, setId] = useState();


    const onChangeInput = (e) => {
        setId(e.target.value);
    };
    const fetchPosts = () => {
        if (!id) {
            window.alert("Please enter id");
        } else {
            dispatch(addfees({ id }));
            setId("");
        }
    };


    return (
        <>
            <MainLayout />
            <div >
                <p className='dasfee'>Dasboard / Get Student </p>
                <div className='M-div'>
                    <div className='dfelx'>

                        <button className='btns'>Create</button>

                        <button className='next-btn'>
                            <span style={{ marginLeft: "-10px" }}><AiFillSetting /></span>
                            Setting
                        </button>
                        <button className='next-btn'>
                            <AiFillEdit />
                            Edit
                        </button>
                        <button className='next-btn'>

                            <span style={{ marginLeft: "-10px" }}> <AiFillDelete /></span>
                            Delete
                        </button>
                    </div>
                </div>
                <div className='R-Form'>



                    <Form style={{ marginTop: "30px" }}>
                        <Form.Group as={Col} controlId="formGridState" className='input2'>
                            <Form.Label className='labels'>Fess Structure Classes wise</Form.Label>
                            <Form.Select
                                onChange={(e) => handletext(e)}
                            // defaultValue="Choose..."
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
                            <div className='show'>
                                <div className='showtext'>{showtext}</div>
                            </div>
                        </Form.Group>

                        <br />
                        <br />
                        <Form.Group className="mb-3 input" controlId="formBasicEmail">
                            <Form.Label className='label2' >Enter Registraion Number</Form.Label>
                            <Form.Control
                                onChange={onChangeInput}
                                value={id}
                                type="text"
                                placeholder="Enter Registraion Number" />
                        </Form.Group>

                        <Button onClick={fetchPosts}
                            className='name'
                            type="submit">
                            Get Details
                        </Button>

                    </Form>
                </div>
                {loading ? (
                    <ShowDetails count={1} />
                ) : (
                    <>
                        {fees?.length > 0 && (
                            <div className="site-card-border-less-wrapper">



                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    )
}

export default Registration