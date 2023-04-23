import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { addPost, fetchPosts } from './Action'
// import { addPost, deletePost, fetchPosts, updatePost } from '../action/Action'
// import { adddetail,fetchdetails } from '../action/TeacherAction'
import {fetchdetails,adddetail} from './action'

const TeacherSlice = createSlice({
  name: 'details',
  initialState: {
    item: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchdetails.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchdetails.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.item = action.payload
      })
      .addCase(fetchdetails.rejected, (state, action) => {state.status = 'failed'
      state.error = action.error.message
      })


      .addCase(adddetail.pending, state => {
      state.status = 'loading'
      })
      .addCase(adddetail.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.item.push(action.payload)
      })
      .addCase(adddetail.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
      })

      }
      })
      
      export default TeacherSlice.reducer