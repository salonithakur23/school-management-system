import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



export const fetchTransport = createAsyncThunk('transports/fetchTransport', async () => {
    const response = await fetch('http://localhost:6001/transports')
    const data = await response.json()
    return data
  })
  
  export const addTransport = createAsyncThunk('transports/addTransport', async (transport) => {
    const response = await fetch(`http://localhost:6001/transports`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transport)
    })
    const data = await response.json()
    return data
  })


//   export const updateFees = createAsyncThunk('fees/updateFees', async (fees) => {
 
//     console.log("fees",fees)
//     const response = await fetch(`http://localhost:4001/feeses/${fees.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(fees)
//     })
//     const data = await response.json()
//     return data
//   })


  
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

 