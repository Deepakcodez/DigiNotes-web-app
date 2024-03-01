"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  
  return (
    <>
    <div className="pt-[3rem] bg-gray-100  h-full ">

      <h1 className="text-5xl mt-[4rem] py-3 ml-[2.5rem]">Boards</h1>
      <div className="w-full flex justify-center">

      <div className="  h-[70vh] md:h-[55vh]  flex  w-[95%] rounded-2xl  bg-gray-200">
        <div className="">creater</div>
        <div>child </div>
      </div>
      </div>
     
    </div>
    </>
  );
}
