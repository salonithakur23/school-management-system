import React,{useState,useEffect} from 'react'
// import MainLayout from '../../Admin/Pages/MainLayout';
import { AiFillDashboard  ,AiFillEdit ,AiFillDelete} from "react-icons/ai";
import { Button, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RiArrowGoBackFill  } from "react-icons/ri";
// import { addsallery } from '../../reducer/action/salleryAction';
import { addsallery } from '../Redux/SalarySlice/action';
import MainLayout from '../Layouts/MainLayout';
import '../../App.css'
import { IoIosCreate } from 'react-icons/io';



const SalleryForm = () => {

  const dispatch = useDispatch();
 
  const [name2, setName2] = useState("");
  const [date2, setDate2] = useState("");
  const [bankname, setBankname] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [account, setAccount] = useState("");
  const [holder, setHolder] = useState("");
  const [sallery, setSallery] = useState("");
  const [leave, setLeave] = useState("");
  const [tsallery, setTsallery] = useState("");
  





  const handleSubmit = (event) => {
    event.preventDefault();
    if (name2 && date2 && bankname && ifsc && account && holder && sallery && leave && tsallery
    ) {
      dispatch(addsallery({
        name2, date2, bankname, ifsc, account, holder, sallery, leave, tsallery,
       
      }));
      // setImage1("");
      setName2("");
      setDate2("");
      setBankname("");
      setIfsc("");
      setAccount("");
      setHolder("");
      setSallery("");
      setLeave("");
      setTsallery("");
  
    }
  };


  return (
   <>

   <MainLayout />

   <Container style={{ width: "90%" }} >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp; Dashboard / Sallery</h5></th>
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
                      <IoIosCreate />&nbsp;<Link to="/sallerylist">Go Back</Link>
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



          <div className='form-div'  >

<Container>


  <form className="row g-4 p-3   registration-form  "
   onSubmit={handleSubmit} 
   >
    {/* <h2 className='text-center  mb-5 '>Teacher Registration from</h2> */}



  


    <div class="col-md-4 position-relative">
      <label className="form-label">Name</label>
      <input type="text" class="form-control"
       value={name2} onChange={(event) => setName2(event.target.value)} required 
       />
      </div>

      <div class="col-md-4 position-relative">
      <label className="form-label">Date</label>
      <input type="text" class="form-control"
       value={date2} onChange={(event) => setDate2(event.target.value)} required 
       />
      </div>


      <div class="col-md-4 position-relative">
      <label className="form-label">Bank Name</label>
      <input type="text" class="form-control"
       value={bankname} onChange={(event) => setBankname(event.target.value)} required 
       />
      </div>

      <div class="col-md-4 position-relative">
      <label className="form-label">Ifsc code</label>
      <input type="text" class="form-control"
       value={ifsc} onChange={(event) => setIfsc(event.target.value)} required 
       />
      </div>


      <div class="col-md-4 position-relative">
      <label className="form-label">Account no</label>
      <input type="text" class="form-control"
       value={account} onChange={(event) => setAccount(event.target.value)} required 
       />
      </div>


      <div class="col-md-4 position-relative">
      <label className="form-label">Holder name</label>
      <input type="text" class="form-control"
       value={holder} onChange={(event) => setHolder(event.target.value)} required 
       />
      </div>


      <div class="col-md-4 position-relative">
      <label className="form-label">Sallery</label>
      <input type="text" class="form-control"
       value={sallery} onChange={(event) => setSallery(event.target.value)} required 
       />
      </div>

      <div class="col-md-4 position-relative">
      <label className="form-label"> leave</label>
      <input type="text" class="form-control"
       value={leave} onChange={(event) => setLeave(event.target.value)} required 
       />
      </div>

      <div class="col-md-4 position-relative">
      <label className="form-label">Total Sallery</label>
      <input type="text" class="form-control"
       value={tsallery} onChange={(event) => setTsallery(event.target.value)} required 
       />
      </div>

      <center>
            <Button className="stu_btn"
              variant="success"
              type="submit">
              Submit
            </Button>
            </center>



</form>

    </Container>
    </div>




   
   
   </>
  )
}

export default SalleryForm
