import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../Redux/PostsSlice/action';
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import Table from 'react-bootstrap/Table';
import Student from './Student';
import MainLayout from '../Layouts/MainLayout';
import './allstudent.css'

const StudentList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.data)
  const postsStatus = useSelector(state => state.posts.status)
  const error = useSelector(state => state.posts.error)

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postsStatus, dispatch])

  let content

  if (postsStatus === 'loading') {
    content = <div>Loading...</div>
  } else if (postsStatus === 'succeeded') {
    content = posts.map(post => <Student key={post.id} post={post} />)
  } else if (postsStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <>
      <MainLayout />

      <p className='dasfee'>Dasboard / View student List </p>
      <div className='M-div'>
        <div className='dfelx'>
          <Link to="/student ">
            <button className='btns'> + Create</button>
          </Link>
          <button className='next-btn'>
          <span className='spantext'><AiFillSetting /></span>
          
            Setting
          </button>
          <button className='next-btn'>
           <span className='spantext'>   <AiFillEdit /></span>
         
            Edit
          </button>
          <button className='next-btn'>
           <span className='spantext'><AiFillDelete /></span>
            Delete
          </button>
        </div>
      </div>



      <div className='post-table'>
        <h2 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Student Details</h2>

        <h1></h1>
        <Table responsive>
          <table class="table table-bordered border-secondary">
            <thead>
              <tr>
                <th>sr.no</th>
                <th>First name</th>
                <th>Last name</th>
                <th>DOA</th>
                <th>Class</th>
                <th>DoB</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Board</th>
                <th>View</th>
                {/* <th>Sibling</th>
           <th>Aadhar no</th> 
          <th>Contact no</th>
          <th>Category</th>
          <th>Father name</th>
          <th>Mother name</th>
          <th>Father's Occupation</th>
          <th>Mother's Occupation</th>
          <th>Present address</th>
          <th>Permanent address</th>
          <th>City</th>
          <th>Religion</th>  */}

              </tr>
            </thead>

            {content}

          </table>
        </Table>
      </div>



    </>
  )
}

export default StudentList