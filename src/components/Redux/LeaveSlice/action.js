import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchleaves = createAsyncThunk('leaves/fetchleaves', async () => {
    const response = await fetch('http://localhost:5007/leaves')
    const item = await response.json()
    return item
  })
  
  export const addleave = createAsyncThunk('leaves/addleave', async (leave) => {
    const response = await fetch('http://localhost:5007/leaves', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(leave)
    })
    const item = await response.json()
    return item
  })








 
  