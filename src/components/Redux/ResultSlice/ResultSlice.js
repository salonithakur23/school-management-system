import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addResult, fetchResult} from './action'

const FessSlice = createSlice({
  name: 'results',
  initialState: {
    data: [],
    status: 'idle',
    error: null,

  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchResult.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchResult.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchResult.rejected, (state, action) => {state.status = 'failed'
      state.error = action.error.message
      })
      .addCase(addResult.pending, state => {
      state.status = 'loading'
      })
      .addCase(addResult.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.data.push(action.payload)
      })
      .addCase(addResult.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
      })

        
    //   .addCase(updateFees.pending, (state) => {
    //     state.status = 'loading'
    //   })
    //   .addCase(updateFees.fulfilled, (state, action) => {
    //     state.status = 'succeeded'
    //     const index = state.data.findIndex((fees) => fees.id === action.payload.id)
    //     state.data[index] = action.payload
    //   })
    //   .addCase(updateFees.rejected, (state, action) => {
    //     state.status = 'failed'
    //     state.error = action.error.message
    //   })
    }
  })     
  export default FessSlice.reducer

  

   
      

    ;

      



    
     