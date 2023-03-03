import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogCard from './../Component/BlogCard';

const BlogsPage = () => {
    const [blogs,setBlogs]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true)
        axios.get('/AllBlogs')
        .then(res=>{
            setBlogs(res.data.data)
            setLoading(false)
          })
    },[])
    console.log(blogs)
    if(loading){
        return(
                     <div className='flex flex-col items-center'>
                     <h1 className='text-center text-3xl bold p-2'>loading</h1>
                     <progress className="progress w-full"></progress>
                     </div>
        );
      }

    return (
        <div className='flex flex-col gap-8 m-8 items-center'>
            <h1 className='text-4xl text-center '>All Blogs</h1>
            {blogs.map((blog,index)=> 
            <BlogCard
                heading={blog.title}
                key={index}
                index={index}
                content={blog.content}
                author={blog.author}
                date={blog.createdDate}
            ></BlogCard>)}
          
        </div>
    );
};

export default BlogsPage;