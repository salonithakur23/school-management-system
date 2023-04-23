import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAttendance = createAsyncThunk('attendance/fetchAttendance', async () => {
    const response = await fetch('http://localhost:5001/attendances')
    const data = await response.json()
    return data
  })

  export const addAttendace = createAsyncThunk('attendance/addAttendace', async (post) => {
    const response = await fetch('http://localhost:5001/attendances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    const data = await response.json()
    return data
  })