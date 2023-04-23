import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


// export const getFeses = createAsyncThunk("feeses/getFeses", async ({ id }) => {
//   return fetch(`http://localhost:4001/feeses/${id}`).then((res) =>
//       res.json()
//   );
// });


export const fetchfFeses = createAsyncThunk('feeses/fetchfFeses', async () => {
    const response = await fetch('http://localhost:4001/feeses')
    const data = await response.json()
    return data
  })
  
  export const addfees = createAsyncThunk('feeses/addfees', async (fees) => {
    const response = await fetch(`http://localhost:4001/feeses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fees)
    })
    const data = await response.json()
    return data
  })


  export const updateFees = createAsyncThunk('fees/updateFees', async (fees) => {
 
    console.log("fees",fees)
    const response = await fetch(`http://localhost:4001/feeses/${fees.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fees)
    })
    const data = await response.json()
    return data
  })


  
  // export const updateFees = (id) =>{
  //   return function (dispatch) {
  //     axios
  //     .get(`http://localhost:3001/feeses/${id}`)
  //     .then((res) =>{
  //       console.log ("resp",resp);
  //       dispatch(updateFees(resp.data))
  //     })
  //   }
  // }

 