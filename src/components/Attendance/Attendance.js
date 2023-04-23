import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const Attendance = ({ attendance }) => {

  

  

  return (
    <>
     

      <tbody>
        <tr>
          <td>{attendance.rollno}</td>
          <td>{attendance.stuname}</td>
          <td>{attendance.date}</td>
          <td>

            <Form>
              {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline

                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />


                </div>
              ))}
            </Form>
          </td>

        </tr>
      </tbody>





    </>
  )
}

export default Attendance