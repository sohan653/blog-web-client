import moment from 'moment/moment';
import React, { useState } from 'react';

const BlogCard = ({index, heading, content, author, date }) => {
    const [showFullContent, setShowFullContent] = useState(false);
  let truncatedContent = content.split(' ').slice(0, 15).join(' ');
    truncatedContent+="(......)"

    const handleShowFullContent = () => {
         setShowFullContent(true);
    };
    return (
        <div className="bg-lime-700 w-3/5 h-auto p-6 rounded-lg shadow-lg">
          <div>
            <p className='text-2xl text-gray-800 m-2'>Blog No: {index+1}</p>
            <p className='m-2 text-blue-800'> {moment(date).format("MMM Do YY")}</p>
          </div>
        <h2 className="text-2xl text-slate-800 font-bold mb-4">{heading}</h2>
        <div className="">
          <p className="mb-4 text-xl text-slate-800">{showFullContent ? content : truncatedContent}</p>
          {!showFullContent && (
            <button
              onClick={handleShowFullContent}
              className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              See More
            </button>
          )}
        </div>
        <div className="flex items-center mt-4">
         
          <div className="text-sm">
          <h1 className='text-amber-800'>Posted By</h1>
            <p className="text-gray-900 text-sm bold leading-none">{author}</p>
           
          </div>
        </div>
      </div>
    );
};

export default BlogCard;