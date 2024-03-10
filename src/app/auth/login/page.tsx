"use client"
import {motion} from 'framer-motion'
const Login = () => {
  return ( 
    <>
    <div className=" relative overflow-hidden h-screen w-full bg-gradient-to-r from-slate-900 to-blue-500 flex justify-center items-end">
       
       {/* laptop */}
       <motion.div
       initial = {{ y:250 }}
       animate = {{ y:60 }}
       transition={{
        type :"spring",
        delay : .5,
        
       }}
       className="absolute z-30 h-[85%] w-[97%] md:w-[70%]   bg-gradient-to-r from-slate-700 to-gray-800  rounded-t-lg px-[2rem] pt-[2rem]"
       style={{
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
      }}
       >
        {/* screen  */}
        <div className="h-full w-full bg-white rounded-sm"></div>
       </motion.div>
       {/* light  */}
       <div className="absolute  w-[30rem] h-[30rem] rounded-full bg-violet-500 blur-[100px]"></div>
       <div className="absolute  left-[10rem] bottom-[-20rem]  w-[40rem] h-[40rem] rounded-full bg-green-300 blur-[200px]"></div>
    </div>
    </>
   );
}
 
export default Login;