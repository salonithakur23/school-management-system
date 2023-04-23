
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { fetchAttendance,addAttendace } from './action'
import { fetchAttendance,addAttendace } from './action'

const AttendanceSlice = createSlice({
  name: 'attendances',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAttendance.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchAttendance.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchAttendance.rejected, (state, action) => {state.status = 'failed'
      state.error = action.error.message
      })
      .addCase(addAttendace.pending, state => {
      state.status = 'loading'
      })
      .addCase(addAttendace.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.data.push(action.payload)
      })
      .addCase(addAttendace.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
      })
      }
      })

      export default AttendanceSlice.reducer