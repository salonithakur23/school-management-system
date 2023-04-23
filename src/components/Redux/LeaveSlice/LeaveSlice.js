import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {addleave,fetchleaves} from './action'


const LeaveSlice = createSlice({
  name: 'leaves',
  initialState: {
    item: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchleaves.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchleaves.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.item = action.payload
      })
      .addCase(fetchleaves.rejected, (state, action) => {state.status = 'failed'
      state.error = action.error.message
      })


      .addCase(addleave.pending, state => {
      state.status = 'loading'
      })
      .addCase(addleave.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.item.push(action.payload)
      })
      .addCase(addleave.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
      })



      
      // .addCase(updatePost.pending, state => {
      //   state.status = 'loading'

      //   })
      //   .addCase(updatePost.fulfilled, (state, action) => {
      //   state.status = 'succeeded'
      //   state.data.put(action.payload)
      //   })
      //   .addCase(updatePost.rejected, (state, action) => {
      //   state.status = 'failed'
      //   state.error = action.error.message
      //   })
  







    





      }
      })
      
      export default LeaveSlice.reducer