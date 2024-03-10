"use client"
import {motion} from 'framer-motion'
const Login = () => {
  return ( 
    <>
    <div className=" relative overflow-hidden h-screen w-full bg-gradient-to-r from-slate-900 to-blue-500 flex justify-center items-end">
    <h1 className='text-5xl text-white self-start mt-[5rem]'>Digi-Notes</h1>
       {/* laptop */}
       <motion.div
       initial = {{ y:250 }}
       animate = {{ y:150 }}
       transition={{
        type :"spring",
        delay : .5,
        
       }}
       className="absolute z-30 h-[85%] w-[97%] md:w-[70%]   bg-gradient-to-r from-slate-700 to-gray-800  rounded-t-lg px-[1rem] md:px-[2rem] pt-[2rem]"
       style={{
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
      }}
       >
        {/* screen  */}
        <div className="h-full  w-full p-6 bg-white rounded-sm">

          <h1 className=' font-bold text-5xl text-center'>Login</h1>

<form className="max-w-md mx-auto py-[5rem]">
  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
 
 
    
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

             
          


        </div>
       </motion.div>
       {/* light  */}
       <div className="absolute  w-[30rem] h-[30rem] rounded-full bg-violet-500 blur-[100px]"></div>
       <div className="absolute  left-[10rem] bottom-[-20rem]  w-[40rem] h-[40rem] rounded-full bg-green-300 blur-[200px]"></div>
    </div>
    </>
   );
}
 
export default Login;