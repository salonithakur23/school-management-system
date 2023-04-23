import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



export const fetchResult = createAsyncThunk('results/fetchResult', async () => {
    const response = await fetch('http://localhost:7001/results')
    const data = await response.json()
    return data
  })
  
  export const addResult = createAsyncThunk('results/addResult', async (result) => {
    const response = await fetch(`http://localhost:7001/results`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(result)
    })
    const data = await response.json()
    return data
  })





 