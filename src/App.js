import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from './Component/UserComponent/Index';
import SignIn from './Component/BusinessOwnerComponent/Reg&Sign/Log/SignIn/SignIn';
import SignUp from './Component/BusinessOwnerComponent/Reg&Sign/Log/SignUp/SignUp'
import ForgetPassword from './Component/BusinessOwnerComponent/Reg&Sign/Log/ForgetPassword/ForgetPassword';
import OTP from './Component/BusinessOwnerComponent/Reg&Sign/Log/OTP/OTP';
import DashBoard_index from './Component/BusinessOwnerComponent/Dashboard/DashBoard_index';
import Register from './Component/BusinessOwnerComponent/Reg&Sign/Registration/Register/Register';
import ImageUploader from './Component/BusinessOwnerComponent/Dashboard/ImageUpload';
function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/user" element={<Index/>} />
            <Route path="/signIn" element={<SignIn/>} />
            <Route path="/registration" element={<SignUp/>} />
            <Route path="/forgetPassword" element={<ForgetPassword/>} />
            <Route path="/Otp" element={<OTP/>} />
            <Route path="/dashBoard" element={<DashBoard_index/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/uploadImg" element={<ImageUploader/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
