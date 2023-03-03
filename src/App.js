import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Component/Navbar";
import PrivateRoute from "./Component/PrivateRoute";
import LoginPage from './Pages/LoginPage';
import BlogsPage from './Pages/BlogsPage';
import MyBlogPage from './Pages/MyBlogPage';
import UpdateBlogPage from "./Pages/UpdateBlogPage";
import SignInPage from "./Pages/SignUpPage";
import CreateBlogPage from './Pages/CreateBlogPage';
import { ToastContainer } from 'react-toastify';



function App() {
  
  const [user,setUser]=useState({})
  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem('user'))
    setUser(data);
   
  },[])
 
  axios.defaults.baseURL = process.env.REACT_APP_API;
  axios.defaults.headers.common["token"] = user?.token || '';
  
  return (
    
   <NavBar>
     
    <Routes>
     
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/signup" element={<SignInPage/>}></Route>
      <Route path="/" element={<PrivateRoute></PrivateRoute>}>
        <Route path='' element={<BlogsPage/>}></Route>
        <Route path='create-blog' element={<CreateBlogPage/>}></Route>
        <Route path='my-blog' element={<MyBlogPage/>}></Route>
        <Route path='my-blog/:id' element={<UpdateBlogPage/>}></Route>
      </Route>
      
    </Routes>
    
   </NavBar>
   
  );
}

export default App;
