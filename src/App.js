import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import FeesForm from './components/FeesForm/FeesForm';
import FeesList from './components/FeesForm/FeesList';
import CreatePost from './components/UserPost/Create';
import UserPost from './components/UserPost/UserPost';
import { Navigate } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/firebase";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login/Login";
import Register from "./components/Register ";
import AddData from "./components/dashboardData/AddData";
import VerifyEmail from './components/VerifyEmail'
import Dashboard from "./components/dashboardData/Dashboard";
import Registration from "./components/Registration/Registration";
import StudentForm from "./components/allstudent/StudentForm";
import StudentList from "./components/allstudent/StudentList";
import AttendanceForm from "./components/Attendance/AttendanceForm";
import AttendanceList from "./components/Attendance/AttendanceList";
import Updater from "./components/FeesForm/Updater";
import TransPortForm from "./components/TransPort/TransPortForm";
import TransPortList from "./components/TransPort/TransPortList";
import ResultForm from "./components/Result/ResultForm";
import ResultList from "./components/Result/ResultList";
import StationaryForm from "./components/Stationary/StatonaryForm";
import StationaryList from "./components/Stationary/StationaryList";
import HolidayForm from "./components/Holidays/HolidayForm";






function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <div className="App">
      {/* 
      <BrowserRouter>
      <Sidebar>
        <Routes>
        
      <Route path='/userpost' element={<UserPost />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/home' element={<Home />} />
      <Route path='/fees' element={<FeesForm />} />
      <Route path='/update/:id' element={<FeesForm  />} />
      <Route path='/feeslist' element={<FeesList />} />
      <Route path='/post' element={<CreatePost />} />
      <Route path='/add' element={<AddItemForm />} />
      <Route path='/item' element={<ItemList />} />
   
      </Routes>
      </Sidebar>
      </BrowserRouter> */}


      <Router>


        <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <Dashboard />
                  </Sidebar>
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <Dashboard />
                  </Sidebar>
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/data-form/:id"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <AddData />
                  </Sidebar>
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/add-data"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <AddData />
                  </Sidebar>
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/fees"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <FeesForm />
                  </Sidebar>
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/update/:id"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <Updater />
                  </Sidebar>
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/feeslist"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <FeesList />
                  </Sidebar>
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/userpost"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <UserPost />
                  </Sidebar>
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/createpost"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <CreatePost />
                  </Sidebar>
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/Registration"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <Registration />
                  </Sidebar>
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/student"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <StudentForm />
                  </Sidebar>
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/studentlist"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <StudentList />
                  </Sidebar>
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/attendance"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <AttendanceForm />
                  </Sidebar>
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/attendanceList"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <AttendanceList />
                  </Sidebar>
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/tranportform"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <TransPortForm />
                  </Sidebar>
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/tranportlist"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <TransPortList />
                  </Sidebar>
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/resultform"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <ResultForm />
                  </Sidebar>
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/resultlist"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <ResultList />
                  </Sidebar>
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/stationaryform"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <StationaryForm />
                  </Sidebar>
                </PrivateRoute>
              }
            />


            <Route
              exact
              path="/stationarylist"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <StationaryList />
                  </Sidebar>
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/holiday"
              element={
                <PrivateRoute>
                  <Sidebar>
                    <HolidayForm />
                  </Sidebar>
                </PrivateRoute>
              }
            />






            <Route
              path="/login"
              element={
                !currentUser?.emailVerified ? (
                  <Login />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/register"
              element={
                !currentUser?.emailVerified ? (
                  <Register />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            {/* <Route path="/verify-email" element={<VerifyEmail />} /> */}
            <Route path="/verify-email" element={<VerifyEmail />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
