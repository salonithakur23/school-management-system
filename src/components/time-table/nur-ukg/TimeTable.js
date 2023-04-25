import React, { useState } from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { Button, Container, Form, Row, Table } from 'react-bootstrap';
import { AiFillDashboard,AiFillEdit ,AiFillDelete} from "react-icons/ai";
// import { addtime } from '../../../reducer/action/TimeTableAction';
import { addtime } from '../../Redux/Timetable/action';
import { useDispatch } from 'react-redux';
// import '../../../style/main.css';
import '../../../App.css'
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { IoIosCreate } from 'react-icons/io';



const TimeTable = () => {

  const dispatch = useDispatch();
  const [period, setPeriod] = useState("");
  const [period1, setPeriod1] = useState("");
  const [period2, setPeriod2] = useState("");
  const [period3, setPeriod3] = useState("");
  const [period4, setPeriod4] = useState("");
  const [period5, setPeriod5] = useState("");
  const [period6, setPeriod6] = useState("");
  const [period7, setPeriod7] = useState("");
  const [period8, setPeriod8] = useState("");
  const [period9, setPeriod9] = useState("");
  const [period10, setPeriod10] = useState("");
  const [period11, setPeriod11] = useState("");
  const [period12, setPeriod12] = useState("");
  const [period13, setPeriod13] = useState("");
  const [period14, setPeriod14] = useState("");
  const [period15, setPeriod15] = useState("");
  const [period16, setPeriod16] = useState("");
  const [period17, setPeriod17] = useState("");
  const [period18, setPeriod18] = useState("");
  const [period19, setPeriod19] = useState("");
  const [period20, setPeriod20] = useState("");
  const [period21, setPeriod21] = useState("");
  const [period22, setPeriod22] = useState("");
  const [period23, setPeriod23] = useState("");
  const [period24, setPeriod24] = useState("");
  const [period25, setPeriod25] = useState("");
  const [period26, setPeriod26] = useState("");
  const [period27, setPeriod27] = useState("");
  const [period28, setPeriod28] = useState("");
  const [period29, setPeriod29] = useState("");
  const [period30, setPeriod30] = useState("");
  const [period31, setPeriod31] = useState("");
  const [period32, setPeriod32] = useState("");
  const [period33, setPeriod33] = useState("");
  const [period34, setPeriod34] = useState("");
  const [period35, setPeriod35] = useState("");
  const [mon, setMon] = useState("");
  const [tues, setTues] = useState("");
  const [wed, setWed] = useState("");
  const [thur, setThur] = useState("");
  const [fri, setFri] = useState("");
  const [sat, setSat] = useState("");
  const [classname1, setClassname1] = useState("");




  const handleSubmit = (event) => {
    event.preventDefault();
    if (period && period1 && period2 && period3 && period4 && period5 && period6 && period7
      && period8 && period9 && period10 && period11 && period12 && period13 && period14
      && period15 && period16 && period17 && period18 && period19 && period20 && period21
      && period22 && period23 && period24 && period25 && period26 && period27 && period28 && period29
      && period30 && period31 && period32 && period33 && period34 && period35
      && mon && tues && wed && thur && fri && sat &&classname1
    ) {
      dispatch(addtime({
        period, period1, period2, period3, period4, period5, period6, period7, period8,
        period9, period10, period11, period12, period13, period14, period15, period16, period17,
        period18, period19, period20, period21, period22, period23, period24, period25, period26,
        period27, period28, period29, period30, period31, period32, period33, period34, period35,
        period27, period28, period29, period30, period31, period32, period33, period34, period35,
        mon, tues, wed, thur, fri, sat,classname1
      }));
      // setImage1("");
      setPeriod("");
      setPeriod1("");
      setPeriod2("");
      setPeriod3("");
      setPeriod4("");
      setPeriod5("");
      setPeriod6("");
      setPeriod7("");
      setPeriod8("");
      setPeriod9("");
      setPeriod10("");
      setPeriod11("");
      setPeriod12("");
      setPeriod13("");
      setPeriod14("");
      setPeriod15("");
      setPeriod16("");
      setPeriod17("");
      setPeriod18("");
      setPeriod19("");
      setPeriod20("");
      setPeriod21("");
      setPeriod22("");
      setPeriod23("");
      setPeriod24("");
      setPeriod25("");
      setPeriod26("");
      setPeriod27("");
      setPeriod28("");
      setPeriod29("");
      setPeriod30("");
      setPeriod31("");
      setPeriod32("");
      setPeriod33("");
      setPeriod34("");
      setPeriod35("");
      setMon("");
      setTues("");
      setWed("");
      setThur("");
      setFri("");
      setSat("");
      setClassname1("");


    }
  };




  return (
    <>
      <MainLayout />

      <Container style={{ width: "90%" }} >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp; Dashboard / Time-Table</h5></th>
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
                      <IoIosCreate />&nbsp;<Link to="/tablelist">Go Back</Link>
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





      

      <div className='form-div'>

        <form onSubmit={handleSubmit}>

        <Form.Select className='tableOption' value={classname1} onChange={(event) => setClassname1(event.target.value)} >
              <option>Choose</option>
              <option >Class Nursery</option>
              <option>Class L.K.G</option>
              <option>Class U.K.G</option>
              <option>Class 1</option>
              <option>Class 2</option>
              <option>Class 3</option>
              <option>Class 4</option>
              <option>Class 5</option>
           
            </Form.Select> 
            
            <br/>

          <Table striped bordered hover responsive  >

          
          
            <thead>
              <tr>
                <th>Days</th>
                <th>Ist Period</th>
                <th>IInd Period</th>
                <th>IIIth Period</th>
                <th>IVth Period</th>
                <th>Vth Period</th>
                <th>VIth Period</th>

              </tr>
            </thead>


            <tbody >

              <tr>
                <td>  <input type="text" class="form-control" placeholder='days' value={mon} onChange={(event) => setMon(event.target.value)} /></td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period} onChange={(event) => setPeriod(event.target.value)} /></td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period1} onChange={(event) => setPeriod1(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period2} onChange={(event) => setPeriod2(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period3} onChange={(event) => setPeriod3(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period4} onChange={(event) => setPeriod4(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period5} onChange={(event) => setPeriod5(event.target.value)} /> </td>
              </tr>

              <tr>
                <td>  <input type="text" class="form-control" placeholder='days' value={tues} onChange={(event) => setTues(event.target.value)} /></td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period6} onChange={(event) => setPeriod6(event.target.value)} /></td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period7} onChange={(event) => setPeriod7(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period8} onChange={(event) => setPeriod8(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period9} onChange={(event) => setPeriod9(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period10} onChange={(event) => setPeriod10(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period11} onChange={(event) => setPeriod11(event.target.value)} /> </td>
              </tr>

              <tr>
                <td>  <input type="text" class="form-control" placeholder='days' value={wed} onChange={(event) => setWed(event.target.value)} /></td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period12} onChange={(event) => setPeriod12(event.target.value)} /></td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period13} onChange={(event) => setPeriod13(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period14} onChange={(event) => setPeriod14(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period15} onChange={(event) => setPeriod15(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period16} onChange={(event) => setPeriod16(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period17} onChange={(event) => setPeriod17(event.target.value)} /> </td>
              </tr>


              <tr>
                <td>  <input type="text" class="form-control" placeholder='days' value={thur} onChange={(event) => setThur(event.target.value)} /></td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period18} onChange={(event) => setPeriod18(event.target.value)} /></td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period19} onChange={(event) => setPeriod19(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period20} onChange={(event) => setPeriod20(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period21} onChange={(event) => setPeriod21(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period22} onChange={(event) => setPeriod22(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period23} onChange={(event) => setPeriod23(event.target.value)} /> </td>
              </tr>


              <tr>
                <td>  <input type="text" class="form-control" placeholder='days' value={fri} onChange={(event) => setFri(event.target.value)} /></td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period24} onChange={(event) => setPeriod24(event.target.value)} /></td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period25} onChange={(event) => setPeriod25(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period26} onChange={(event) => setPeriod26(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period27} onChange={(event) => setPeriod27(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period28} onChange={(event) => setPeriod28(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period29} onChange={(event) => setPeriod29(event.target.value)} /> </td>
              </tr>


              <tr>
                <td>  <input type="text" class="form-control" placeholder='days' value={sat} onChange={(event) => setSat(event.target.value)} /></td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period30} onChange={(event) => setPeriod30(event.target.value)} /></td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period31} onChange={(event) => setPeriod31(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period32} onChange={(event) => setPeriod32(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period33} onChange={(event) => setPeriod33(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period34} onChange={(event) => setPeriod34(event.target.value)} /> </td>
                <td>  <input type="text" class="form-control" placeholder='period' value={period35} onChange={(event) => setPeriod35(event.target.value)} /> </td>
              </tr>







            </tbody>
            <br></br>

            
          </Table>


          <center>
            <Button className="stu_btn"
              variant="success"
              type="submit"
            >
              Submit
            </Button>
          </center>


        </form>



      </div>
    </>
  )
}

export default TimeTable;
