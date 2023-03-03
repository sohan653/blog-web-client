import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateBlog = ({id}) => {
    const navigate=useNavigate()
    const [loading,setLoading]=useState(false);
    const [heading,setHeading]=useState('');
    const [content,setContent]=useState('');
    const [blog,setBlog]=useState({})
    
    useEffect(()=>{
        setLoading(true)
        axios.get(`/MyBlog/${id}`)
        .then(response => {
            setBlog(response.data.data)
            setLoading(false);
        })
        .catch(error => toast.error(error.message))
    },[])


    const handleFormSubmit=(e)=>{
        e.preventDefault();
        setLoading(true);
        axios.post(`/UpdateBlog/${id}`,{
            title:heading || blog.title,
            content:content || blog.content
        })
      .then(response => {
        setLoading(false);
        toast.success('Updated successfully');
        navigate('/my-blog')
       })
        .catch(error => toast.error(error.message))

    }

    return (
        <div className='w-3/4'>
        <h1 className='text-center text-3xl'>Update Blog</h1>
        {loading &&      <div className='flex flex-col items-center'>
             <h1 className='text-center p-2'>loading</h1>
             <progress className="progress w-full"></progress>
             </div>
}
        <form onSubmit={handleFormSubmit}>
  <div className="mb-4">
    <label htmlFor="heading" className="block text-amber-200 font-bold mb-2">
      Heading
    </label>
    <input
      type="text"
      id="heading"
      defaultValue={blog.title}
      className="border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      onChange={(event) => setHeading(event.target.value)}
    />
  </div>
  <div className="mb-4">
    <label htmlFor="content" className="block text-amber-200  font-bold mb-2">
      Content
    </label>
    <textarea
        rows={17}
      id="content"
      defaultValue={blog.content}
      className="border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      onChange={(event) => setContent(event.target.value)}
    ></textarea>
  </div>
  
  <button
    type="submit"
    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    Update
  </button>
</form>


    </div>
    );
};

export default UpdateBlog;