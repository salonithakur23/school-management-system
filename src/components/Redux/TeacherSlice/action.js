import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchdetails = createAsyncThunk('details/fetchdetails', async () => {
    const response = await fetch('http://localhost:5005/details')
    const item = await response.json()
    return item
  })
  
  export const adddetail = createAsyncThunk('details/adddetail', async (detail) => {
    const response = await fetch('http://localhost:5005/details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(detail)
    })
    const item = await response.json()
    return item
  })







 
  