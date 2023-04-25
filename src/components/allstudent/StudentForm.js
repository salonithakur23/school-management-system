import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addPost } from '../Redux/PostsSlice/action';
import { Button, Container, Row, Form, Table } from "react-bootstrap";
import { BiCaretRight } from "react-icons/bi";
import './allstudent.css'
import MainLayout from '../Layouts/MainLayout';
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';






const StudentForm = () => {


  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [sr, setSr] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [doa, setDoa] = useState("");
  const [cla, setCla] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [board, setBoard] = useState("");
  const [sibling, setSibling] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [contact, setContact] = useState("");
  const [category, setCategory] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [foccupation, setFoccupation] = useState("");
  const [moccupation, setMoccupation] = useState("");
  const [presentaddress, setPresentaddress] = useState("");
  const [permanentaddress, setPermanentaddress] = useState("");
  const [city, setCity] = useState("");
  const [religion, setReligion] = useState("");





  const handleSubmit = (event) => {
    event.preventDefault();
    if (sr && firstname && lastname && doa && cla && dob && age && gender && board && aadhar && contact
      && category && father && mother && foccupation && moccupation && presentaddress && permanentaddress
      && city && religion
    ) {
      dispatch(addPost({
        sr, firstname, lastname, doa, cla, dob, age, gender, board, aadhar, contact, category, father,
        mother, foccupation, moccupation, presentaddress, permanentaddress, city, religion,

      }));
      // setImage("");
      setSr("");
      setFirstname("");
      setLastname("");
      setDoa("");
      setCla("");
      setDob("");
      setAge("");
      setGender("");
      setBoard("");
      setSibling("");
      setAadhar("");
      setContact("");
      setCategory("");
      setFather("");
      setMother("");
      setFoccupation("");
      setMoccupation("");
      setPresentaddress("");
      setPermanentaddress("");
      setCity("");
      setReligion("");

    }
  };



  return (
    <>

      <MainLayout />
      <p className='dasfee'>Dasboard / Add Student Form </p>
      <div className='M-div'>
        <div className='dfelx'>
          <Link to="/studentlist ">
            <button className='btns'>
              <span className='spantext'><RiArrowGoBackLine /></span>
              Go Back</button>
          </Link>
          <button className='next-btn'>

            <span className='spantext'>   <AiFillSetting /></span>

            Setting
          </button>
          <button className='next-btn'>
            <span className='spantext'><AiFillEdit /></span>


            Edit
          </button>
          <button className='next-btn'>
            <span className='spantext'> <AiFillDelete /></span>


            Delete
          </button>
        </div>
      </div>



      <div className='post-table'  >


        <Form onSubmit={handleSubmit}>
          <Container fluid >
            <Row>





              <h5 className='per-detail' > <BiCaretRight /> Personal details</h5>





              <div className="col-md-4 mt-3  position-relative">
                <label className="form-label">First name</label>
                <input type="text" className="form-control"
                  value={firstname} onChange={(event) => setFirstname(event.target.value)} required
                />
              </div>


              <div className="col-md-4 mt-3  position-relative">
                <label className="form-label">Last name</label>
                <input type="text" className="form-control"
                  value={lastname} onChange={(event) => setLastname(event.target.value)} required
                />

              </div>


              <div className="col-md-4  mt-3  position-relative">
                <label className="form-label">DOB</label>
                <input type="text" className="form-control"
                  value={dob} onChange={(event) => setDob(event.target.value)} required
                />

              </div>

              <div className="col-md-4 mt-3  position-relative">
                <label className="form-label">Sibling</label>
                <input type="text" className="form-control"
                  value={sibling} onChange={(event) => setSibling(event.target.value)}
                />

              </div>

              <div className="col-md-4 mt-3  position-relative">
                <label className="form-label">Father name</label>
                <input type="text" className="form-control"
                  value={father} onChange={(event) => setFather(event.target.value)}
                />
              </div>


              <div className="col-md-4 mt-3  position-relative">
                <label className="form-label">Mother name</label>
                <input type="text" className="form-control"
                  value={mother} onChange={(event) => setMother(event.target.value)}
                />
              </div>



              <div className="col-md-4 mt-3  position-relative">
                <label className="form-label">Age</label>
                <input type="number" className="form-control"
                  value={age} onChange={(event) => setAge(event.target.value)} required
                /></div>

      


              <hr className='stuhr' />


              <h5 className='per-detail'> <BiCaretRight /> Professional  details</h5>


              <div className="col-sm-4 mt-3 position-relative">
                <label className="form-label">S.R No</label>
                <input type="number" className="form-control"
                  value={sr} onChange={(event) => setSr(event.target.value)} required
                />
              </div>

              <div className="col-md-4 mt-3  position-relative">
                <label className="form-label">Date of admission</label>
                <input type="text" className="form-control"
                  value={doa} onChange={(event) => setDoa(event.target.value)} required
                />

              </div>


              <div className="col-md-4 mt-3  position-relative">
                <label className="form-label">Board</label>
                <input type="text" className="form-control"
                  value={board} onChange={(event) => setBoard(event.target.value)}
                />

              </div>

              <div className="col-md-4 mt-3  position-relative">
                <label className="form-label">className</label>
                <input type="text" className="form-control"
                  value={cla} onChange={(event) => setCla(event.target.value)} required
                />

              </div>

              <div className="col-md-4 mt-3  position-relative">
                <label className="form-label">Category</label>
                <input type="text" className="form-control"
                  value={category} onChange={(event) => setCategory(event.target.value)}
                />
              </div>

              <div className="col-md-4 mt-3 position-relative">
                <label className="form-label">City</label>
                <input type="text" className="form-control"
                  value={city} onChange={(event) => setCity(event.target.value)}
                />
              </div>


              <div className="col-md-4  mt-3  position-relative">
                <label className="form-label">Religion</label>
                <input type="text" className="form-control"
                  value={religion} onChange={(event) => setReligion(event.target.value)}
                />
              </div>









              <hr className='stuhr' />


              <h5 className='per-detail'> <BiCaretRight />Other details</h5>







              <div className="col-md-4 mt-3 position-relative">
                <label className="form-label">Gender</label>
                <select className="form-select"
                  value={gender} onChange={(event) => setGender(event.target.value)} required
                >

                  <option >choose</option>
                  <option   >Male </option>
                  <option   >Female</option>
                  <option   >Other</option>

                </select>
              </div>


              <div className="col-md-4 mt-3  position-relative">
                <label className="form-label">Aadhar no</label>
                <input type="number" className="form-control"
                  value={aadhar} onChange={(event) => setAadhar(event.target.value)}
                />
              </div>


              <div className="col-md-4 mt-3  position-relative">
                <label className="form-label">Contact no</label>
                <input type="number" className="form-control"
                  value={contact} onChange={(event) => setContact(event.target.value)}
                />
              </div>


              <div className="col-md-4 mt-3  position-relative">
                <label className="form-label">Father's Occupation</label>
                <input type="text" className="form-control"
                  value={foccupation} onChange={(event) => setFoccupation(event.target.value)}
                />
              </div>


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
              </div>


              <div className="col-md-4 mt-3  position-relative">
                <label className="form-label">Permanent address</label>
                <input type="text" className="form-control"
                  value={permanentaddress} onChange={(event) => setPermanentaddress(event.target.value)}
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
        {/* </> */}
      </div>


    </>
  )
}

export default StudentForm