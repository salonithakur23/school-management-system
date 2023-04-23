import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addfees, fetchfFeses,updateFees} from './action'

const FessSlice = createSlice({
  name: 'feeses',
  initialState: {
    data: [],
    status: 'idle',
    error: null,

  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchfFeses.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchfFeses.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchfFeses.rejected, (state, action) => {state.status = 'failed'
      state.error = action.error.message
      })
      .addCase(addfees.pending, state => {
      state.status = 'loading'
      })
      .addCase(addfees.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.data.push(action.payload)
      })
      .addCase(addfees.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
      })

        
      .addCase(updateFees.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateFees.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const index = state.data.findIndex((fees) => fees.id === action.payload.id)
        // const {id,sname,cname}= action.payload;
        // const uu = state .find(fees => fees.id == id);
        // if(uu) {
        //   uu.sname = sname,
        //   uu.cname = cname,
        // }
        state.data[index] = action.payload
      })
      .addCase(updateFees.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
    }
  })     
  export default FessSlice.reducer

  

      // .addCase(updateFees.pending, (state) => {
      //   state.status = 'loading'
      // })
      // .addCase(updateFees.fulfilled, (state, action) => {
      //   state.status = 'succeeded'
      //   const updatedFeeIndex = state.data.findIndex(fee => fee.id === action.payload.id)
      //   state.data[updatedFeeIndex] = action.payload
      // })
      // .addCase(updateFees.rejected, (state, action) => {
      //   state.status = 'failed'
      //   state.error = action.error.message
      // })

      

      // .addCase(updateFees.pending, (state) => {
      //   state.isLoading = true;
      //   state.error = null;
      // })
      // .addCase(updateFees.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   const updatedFeesIndex = state.feeses.findIndex(fees => fees.id === action.payload.id);
      //   if (updatedFeesIndex !== -1) {
      //     state.feeses[updatedFeesIndex] = action.payload;
      //   }
      // })
      // .addCase(updateFees.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.error.message;
      // });

      



    
     