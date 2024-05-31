import { SignUp } from "@clerk/nextjs";

import React from 'react'

const Signup = () => {
  return (
    <div className='mt-32 w-full flex items-center justify-center pb-12'>
      <SignUp />
    </div>
  )
}

export default Signup
