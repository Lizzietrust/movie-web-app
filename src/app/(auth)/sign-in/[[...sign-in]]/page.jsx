import { SignIn } from "@clerk/nextjs";

const Signin = () => {
    return (
      <div className='mt-32 w-full flex items-center justify-center pb-12'>
        <SignIn />
      </div>
    )
}
  
export default Signin
  