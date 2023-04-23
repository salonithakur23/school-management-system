import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { Container, Row,Col,Form,Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { updateFees } from '../Redux/Slice/action';
import { useDispatch } from 'react-redux';

const Updater = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const fesses = useSelector((state) => state.fesses);
    const existingUser = fesses.filter(f => f.id == id);
    const {sname,cname,rollno,regno,regfee,monfee,
        examfee,compufee,paymethod,address,remark,fname,mname}=existingUser[0];


        const [usname, setSname] = useState(sname);
        const [ucname, setCname] = useState(cname);
        const [urollno, setRollno] = useState(rollno);
        const [uregno, setRegno] = useState(regno);
        const [uregfee, setRegfee] = useState(regfee);
        const [umonfee, setMonfee] = useState(monfee);
        const [uexamfee, setExamfee] = useState(examfee);
        const [ucompufee, setCompufee] = useState(compufee);
        const [upaymethod, setPaymethod] = useState(paymethod);
        const [uaddress, setAddress] = useState(address);
        const [uremark, setRemark] = useState(remark);
        const [ufname, setFname] = useState(fname);
        const [umname, setMname] = useState(mname);
    
 
  
    const handleUpdate = (event) =>{
        event.preventDefault();
        dispatch(updateFees({
                id:id,
                sname:usname,
                cname :ucname,
                rollno :urollno,
                regno :uregno,
                regfee:uregfee,
                monfee:umonfee,
                examfee:uexamfee,
                compufee:ucompufee,
                paymethod: upaymethod,
                address:uaddress,
                remark:uremark,
                fname: ufname,
                mname: umname
        }))
        navigate('/feeform')
    }


  return (
   <>
    <Container>
                <Row>
                
                              <div>
                    <div style={{border:"solid 1px gray",width:"100%",height:"100%",marginTop:"30px"}}>
                        <h1>Updated</h1>
                        <Form 
                       
                            onSubmit={handleUpdate}
                            >

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label className='label'>Student Name</Form.Label>
                                    <Form.Control
                                   
                                        type='text'
                                        // placeholder='Student Name'
                                        value={usname}
                                        onChange={e =>setSname(e.target.value)}
                                         />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label className='label'>Class Name</Form.Label>
                                    <Form.Control type='text'
                                        // placeholder='Class Name'
                                        value={ucname}
                                        onChange={e =>setCname(e.target.value)}

                                      

                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label className='label'>Roll No.</Form.Label>
                                    <Form.Control type='text'
                                        // placeholder='Roll No.'
                                        value={urollno}
                                        onChange={e =>setRollno(e.target.value)}
                                     

                                    />
                                </Form.Group>

                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label className='label'>Registration No.</Form.Label>
                                    <Form.Control type='text'
                                        // placeholder='Registration No.'
                                     value={uregno}
                                     onChange={e =>setRegno(e.target.value)}

                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label className='label'>Registration Fee</Form.Label>
                                    <Form.Control type='text'
                                        // placeholder='Registration Fee'
                                 value={uregfee}
                                 onChange={e =>setRegfee(e.target.value)}

                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label className='label'>Monthly Fee</Form.Label>
                                    <Form.Control type='text'
                                       value={umonfee}
                                 onChange={e =>setMonfee(e.target.value)}
                                    
                                    />
                                </Form.Group>
                            </Row>


                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label className='label'>Examination Fee</Form.Label>
                                    <Form.Control type='text'
                                      value={uexamfee}
                                 onChange={e =>setExamfee(e.target.value)}

                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label className='label2'>Computer Class Fees</Form.Label>
                                    <Form.Control type='text'
                                       
                                     value={ucompufee}
                                 onChange={e =>setCompufee(e.target.value)}

                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label className='label'>Payment Method</Form.Label>
                                    <Form.Select defaultValue="Choose..."
                                       value={upaymethod}
                                 onChange={e =>setPaymethod(e.target.value)}

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
                                     value={uaddress}
                                 onChange={e =>setAddress(e.target.value)}

                                  
                                    />
                                </Form.Group>



                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label className='label'>Father Name</Form.Label>
                                    <Form.Control type='text'
                                 onChange={e =>setFname(e.target.value)}
                                    
                                       value={ufname} 
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label className='label'>Mother Name</Form.Label>
                                    <Form.Control type='text'
                                     value={umname}
                                 onChange={e =>setMname(e.target.value)}

                                  
                                    />
                                </Form.Group>
                            </Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label className='remark'>Remarks</Form.Label>
                                <Form.Control as="textarea" rows={3}
                                 value={uremark}
                                 onChange={e =>setRemark(e.target.value)}

                                />
                            </Form.Group>

                            <Button className='sec' variant="secondary" type="submit"

                            >
                                Update
                            </Button>
                            <br />
                        </Form>
                    </div>
                    </div>
                
                </Row>
            </Container>
   
   
   </>
  )
}

export default Updater