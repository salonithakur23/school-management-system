import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchStationary, addStationary} from './action'

const StationarySlice = createSlice({
  name: 'stationarys',
  initialState: {
    data: [],
    status: 'idle',
    error: null,

  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchStationary.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchStationary.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchStationary.rejected, (state, action) => {state.status = 'failed'
      state.error = action.error.message
      })
      .addCase(addStationary.pending, state => {
      state.status = 'loading'
      })
      .addCase(addStationary.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.data.push(action.payload)
      })
      .addCase(addStationary.rejected, (state, action) => {
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
  export default StationarySlice.reducer

  

   
      

    ;

      



    
     