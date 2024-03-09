"use client"
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const router = useRouter();

  const loginHandler=()=>{
    try {
        router.push('/auth/login')

    } catch (error) {
        console.log('>>>>>>>>>>>', error)
    }

  }

  return (
    <>
     <div className=" absolute z-20 h-[3rem] w-full flex gap-4 py-2 px-3 justify-between  ">
      <div className="text-xl font-bold text-white">Digi-Notes</div>
      <div className="flex justify-center px-3 gap-3 ">
      <Button variant={"secondary"} onClick={loginHandler}>Login</Button>
      <div className="bg-white h-10 w-10 rounded-full shadow-md flex justify-between items-center text-center  ">
         <h1 className="text-center text-2xl  w-full">P</h1>
      </div>
      </div>
     
     </div>
    </>
  );
}
