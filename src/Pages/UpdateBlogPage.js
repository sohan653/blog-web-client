import React from 'react';
import { useParams } from 'react-router-dom';
import UpdateBlog from '../Component/UpdateBlog';

const UpdateBlogPage = () => {
    const {id}=useParams()
   
    return (
        <div className='flex justify-center'>
          <UpdateBlog id={id}></UpdateBlog>
        </div>
    );
};

export default UpdateBlogPage;