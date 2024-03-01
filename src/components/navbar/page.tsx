"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Navbar() {
  const router = useRouter();
  const logoutHandler = async () => {
    try {
      const response = await axios.get("/api/auth/logout");
      console.log(">>>>>>>>>>>", response);
      router.push('/auth/login')
    } catch (error) {
      console.log(">>>>>>>>>>>", error);
    }
  };
  return (
    <>
     <div className="bg-gray-100 absolute h-[3rem] w-full flex gap-4 py-2 px-3 justify-between">
      <div className="text-lg font-bold">Logo</div>
      <div className="flex justify-center px-3 gap-3 ">
      <Button onClick={logoutHandler}>Logout</Button>
      <div className="bg-white h-10 w-10 rounded-full shadow-md flex justify-between items-center text-center  ">
         <h1 className="text-center text-2xl  w-full">P</h1>
      </div>
      </div>
     
     </div>
    </>
  );
}
