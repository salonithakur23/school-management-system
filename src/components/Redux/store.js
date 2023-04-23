import { configureStore } from '@reduxjs/toolkit'
import FessSlice from './Slice/FessSlice'
import PostSlice from './features/postSlice'
import PostsSlice from './PostsSlice/PostsSlice'
import AttendanceSlice from './Attendance/AttendanceSlice'
import TransPostSlice from './TransPortSlice/TransPostSlice'
import ResultSlice from './ResultSlice/ResultSlice'
import StationarySlice from './Stationary/StationarySlice'




export default configureStore({
  reducer: {
    feeses:FessSlice,
    app:PostSlice,
    posts:PostsSlice,
    attendances:AttendanceSlice,
    transports:TransPostSlice,
    results:ResultSlice,
    stationarys:StationarySlice 
  }
}) 