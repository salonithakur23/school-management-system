import { Link } from "react-router-dom";
import React,{useState , useEffect} from "react";
import ShowList from "./ShowList";
import { useNavigate } from "react-router-dom";








const Detail = ({ detail }) => {

  const [open1, setOpen1] = useState(false);
  const [user1, setUser1] = useState({});
  const navigate  = useNavigate("");

  const handleModel1 = () => {
    setOpen1(true);
    setUser1(detail);

  }
  
  
   
    return (
      <>


    <tbody>
          <tr>

          {/* <div>
            <img width={"50%"} src={detail.image} />
          </div> */}
           
            <td>{detail.firstname1}</td>
            <td>{detail.lastname1}</td>
            <td>{detail.join}</td>
            <td>{detail.email}</td>
            <td>{detail.qufication}</td>
            <td>{detail.experience}</td>
            <td>{detail.special}</td>
            <td>{detail.lastquali}</td>
           <td>{detail.marriage}</td>
            {/* <td>{detail.dob1}</td>
            <td>{detail.gender1}</td>
            <td>{detail.board1}</td> 
            <td>{detail.aadhar1}</td>
            <td>{detail.contact1}</td>
            <td>{detail.category1}</td>
            <td>{detail.father1}</td>
            <td>{detail.mother1}</td>
            <td>{detail.foccupation1}</td>
            <td>{detail.moccupation1}</td>
            <td>{detail.address1}</td>
            <td>{detail.religion1}</td>
            <td>{detail.city1}</td> */} 

            {/* <Link className="view-link" >View</Link> */}
          

 {/* <Link to="/showlist" onClick={()=> handleModel1()}> View */}
  <button className="view-btn" 
  //  onClick={()=> handleModel1()}
  >View </button>
  {/* </Link> */}
    
            {/* <button className="view-btn" onClick={() => updatePost(post)}>edit </button> */}


            {open1 && (
            <ShowList
            
              open={open1}
              setOpen={setOpen1}
              // updatePost={updatePost}
              {...user1}
            />
          )}

            
          </tr>
          </tbody>
          </>

          
      


  
    );
  };

  export default Detail;
