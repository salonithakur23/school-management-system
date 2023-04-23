import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('http://localhost:3001/posts')
    const data = await response.json()
    return data
  })

  export const addPost = createAsyncThunk('posts/addPost', async (post) => {
    const response = await fetch('http://localhost:3001/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    const data = await response.json()
    return data
  })