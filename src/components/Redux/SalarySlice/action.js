import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchsallerys = createAsyncThunk('sallerys/fetchsallerys', async () => {
    const response = await fetch('http://localhost:5008/sallerys')
    const item = await response.json()
    return item
  })
  
  export const addsallery = createAsyncThunk('sallerys/addsallery', async (sallery) => {
    const response = await fetch('http://localhost:5008/sallerys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sallery)
    })
    const item = await response.json()
    return item
  })








 
  