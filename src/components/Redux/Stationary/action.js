import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



export const fetchStationary = createAsyncThunk('stationarys/fetchStationary', async () => {
    const response = await fetch('http://localhost:8001/stationarys')
    const data = await response.json()
    return data
  })
  
  export const addStationary = createAsyncThunk('stationarys/addStationary', async (stationarys) => {
    const response = await fetch(`http://localhost:8001/stationarys`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(stationarys)
    })
    const data = await response.json()
    return data
  })




  

 