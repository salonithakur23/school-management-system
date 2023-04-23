
import ModalCamp from "./ModalCamp ";
import React, { useState } from 'react'



const Student = ({ post }) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});

  const handleModel = () => {
    setOpen(true);
    setUser(post);

  }
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete that user ?")) {
      try {
        setOpen(false);

      } catch (err) {
        console.log(err)
      }
    }

  }
  return (
    <>

        <tbody>
          <tr>
            <td>{post.sr}</td>
            <td>{post.firstname}</td>
            <td>{post.lastname}</td>
            <td>{post.doa}</td>
            <td>{post.cla}</td>
            <td>{post.dob}</td>
            <td>{post.age}</td>
            <td>{post.gender}</td>
            <td>{post.board}</td>
            {/* <td>{post.sibling}</td>
            <td>{post.aadhar}</td>
            <td>{post.contact}</td>
            <td>{post.category}</td>
            <td>{post.father}</td>
            <td>{post.mother}</td>
             <td>{post.foccupation}</td>
             <td>{post.moccupation}</td>
            <td>{post.presentaddress}</td>
            <td>{post.permanentaddress}</td>
            <td>{post.city}</td>
            <td>{post.religion}</td> */}
            <td>
          {/* <Link to='/vi'> */}
              <button style={{
              backgroundColor: "gray",
              width: "100px",
              height: "30px",

            }}
              onClick={() => handleModel(post)}
            >
              View
            </button>
          {/* </Link> */}
          </td>
          {open && (
            <ModalCamp
              open={open}
              setOpen={setOpen}
              // handleDelete={handleDelete}
              {...user}
            />
          )}
          </tr>

        </tbody>


    </>
  );
};

export default Student;