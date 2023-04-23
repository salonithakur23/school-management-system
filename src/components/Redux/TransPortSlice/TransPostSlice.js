import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addTransport, fetchTransport,updateFees} from './action'

const FessSlice = createSlice({
  name: 'transports',
  initialState: {
    data: [],
    status: 'idle',
    error: null,

  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTransport.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchTransport.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchTransport.rejected, (state, action) => {state.status = 'failed'
      state.error = action.error.message
      })
      .addCase(addTransport.pending, state => {
      state.status = 'loading'
      })
      .addCase(addTransport.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.data.push(action.payload)
      })
      .addCase(addTransport.rejected, (state, action) => {
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

      



    
     