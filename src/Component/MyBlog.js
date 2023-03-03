import React, {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteAlert } from './DeleteAlert';

import axios from 'axios';

const MyBlog = () => {
  const[loading,setLoading]=useState(false)
  const [blogs,setBlogs]=useState([])
  const navigate=useNavigate();
  console.log('achis')
 useEffect(()=>{
  setLoading(true)
  axios.get('/MyBlog')
  .then(res=>{
      setBlogs(res.data.data)
      setLoading(false)
    })
 },[])
  
 
  if(loading){
    return(
                 <div className='flex flex-col items-center'>
                 <h1 className='text-center text-3xl bold p-2'>loading</h1>
                 <progress className="progress w-full"></progress>
                 </div>
    );
  }

    return (
      <div class="overflow-x-auto ">
      <table class="table  w-full ">
        <thead className=''>
          <tr className='text-center'>
            <th></th> 
            <th>TITLE</th> 
            <th>Content</th> 
             
            <th>ACTION</th>
          </tr>
        </thead> 
        <tbody>
          {
           
            blogs.map((blog, index) =>{
                return(
                <tr className='text-center'>
                    <td>{index+1}</td>
                    <td>{blog.title}</td>
                    <td>{blog.content.split(' ').slice(0, 15).join(' ')}(...)</td>
                    
                    <td className=''>
                        <button onClick={()=>deleteAlert(blog._id)} className='btn btn-danger py-1 mr-2'>delete</button>
                        <button onClick={()=>navigate(`/my-blog/${blog._id}`)} className='btn btn-secondary py-1'>edit</button>
                    </td>
                </tr>)
            })
          }
          
        </tbody> 
        {blogs.length>20 && <tfoot>
          <tr>
          <th></th> 
            <th>TITLE</th> 
            <th>Content</th> 
             
            <th>ACTION</th>
          </tr>
        </tfoot>}
      </table>
    </div>
    );
};

export default MyBlog;