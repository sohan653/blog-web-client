import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from './Loading';

const PrivateRoute = () => {
    const [auth,setAuth]=useState(false)
    console.log(auth)
  
  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem('user'))
    console.log(data)
    
   if(data?.token){
    setAuth(true)
   }
  },[])
    return auth ? <Outlet></Outlet> : <Loading></Loading>
};

export default PrivateRoute;