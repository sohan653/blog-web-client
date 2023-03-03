import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from './Loading';

const CreateBlog = () => {
  const navigate=useNavigate()
  const [loading,setLoading]=useState(false)
    const [heading, setHeading] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');


    useEffect(()=>{
      const data=JSON.parse(localStorage.getItem('user'))
      setAuthor(data.name);
     
    },[])
  
    function validateBlogPostContent(content) {
        const wordCount = content.split(' ').length;
        if (wordCount < 20) {
          return 'Blog post content must be at least 20 words long';
        }
      }


    const handleFormSubmit = (event) => {
     
      event.preventDefault();

      const validationError = validateBlogPostContent(content);
      if (validationError) {
        alert(validationError);
        return;
      }
      // submit blog post
      const payload={
        title:heading,
        content:content,
        author:author
      }
      setLoading(true)
      axios.post('/CreateBlog', payload)
      .then(res=>{
        setLoading(false);
        if(res.status){
          toast.success('Blog post created');
         
          navigate('/my-blog')
        }else{
          toast.error('Blog post not created')
        }
      })
      .catch(err => toast.error(err.message))
    };
    return (
        <div className='w-3/4'>
            <h1 className='text-center text-3xl'>Creating Blog</h1>
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
          className="border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(event) => setContent(event.target.value)}
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
       Create
      </button>
    </form>
 

        </div>
    );
};

export default CreateBlog;