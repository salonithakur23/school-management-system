
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPosts,addPost } from './action'

const PostsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {state.status = 'failed'
      state.error = action.error.message
      })
      .addCase(addPost.pending, state => {
      state.status = 'loading'
      })
      .addCase(addPost.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.data.push(action.payload)
      })
      .addCase(addPost.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
      })
      }
      })

      export default PostsSlice.reducer