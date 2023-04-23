import React from 'react'

const Leave = ({ leave }) => {
  return (

    <>
      <tbody>
        <tr>

          <td>{leave.name1}</td>
          <td>{leave.class1}</td>
          <td>{leave.father}</td>
          <td>{leave.date2}</td>
          <td>{leave.reason}</td>
          <td>{leave.check}</td>

          {/* <button className="view-btn">View </button> */}
        </tr>
      </tbody>


    </>
  )
}

export default Leave
