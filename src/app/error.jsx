'use client';

import { useEffect } from 'react';
export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className='text-center mt-32'>
      <h1 className='text-white'>Something went wrong. Please try again later.</h1>
      <button className='text-white' onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}