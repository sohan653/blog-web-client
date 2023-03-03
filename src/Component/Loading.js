import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Loading = ({ path = "login" }) => {
    // state
  const [count, setCount] = useState(3);
  // hooks
  const navigate = useNavigate();
  const location = useLocation();
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    // redirect once count is equal to 0
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    // cleanup
    return () => clearInterval(interval);
  }, [count]);
    return (
        <div
      className="flex justify-center items-center"
      style={{ height: "90vh" }}
    >
      <div class="flex items-center justify-center">
    <h1 className='text-4xl bold text-blue-800'>loading</h1>
</div>
    </div>
    );
};

export default Loading;