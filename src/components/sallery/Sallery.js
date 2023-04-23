import React from 'react'

const Sallery = ({ sallery }) => {
  return (
  <>
   <tbody>
          <tr>

          {/* <div>
            <img width={"50%"} src={detail.image} />
          </div> */}
           
            <td>{sallery.name2}</td>
            <td>{sallery.date2}</td>
            <td>{sallery.bankname}</td>
            <td>{sallery.ifsc}</td>
            <td>{sallery.account}</td>
            <td>{sallery.holder}</td>
            <td>{sallery.sallery}</td>
            <td>{sallery.leave}</td>
            <td>{sallery.tsallery}</td>


            {/* <button className="view-btn" >View </button> */}

            </tr>
          </tbody>
  
  
  </>
  )
}

export default Sallery
