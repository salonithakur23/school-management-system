import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchtimes = createAsyncThunk('times/fetchtimes', async () => {
    const response = await fetch('http://localhost:5006/times')
    const tab = await response.json()
    return tab
  })

  export const addtime = createAsyncThunk('times/addtime', async (time) => {
    const response = await fetch('http://localhost:5006/times', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(time)
    })
    const tab = await response.json()
    return tab
  })
