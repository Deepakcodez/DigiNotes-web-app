"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment , useRef} from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const card = [1, 1, 1, 1, 1, 1, 1, 1, 1,1,,1,1];

  return (
    <>
      <div className="pt-[3rem] bg-gray-100  h-full px-2">
        <div className="text-5xl font-semibold">Boards</div>
        {/* parent box */}
        <div className="bg-gray-300 rounded-md h-[70vh] md:h-[55vh] p-5 flex gap-2">
          <div className="px-[5rem] rounded-lg h-full bg-blue-500 flex justify-center items-center"> <Plus color="white" size={40}/> </div>
          {/* cards */}
          <div className="bg-black w-full flex flex-row gap-2 overflow-x-auto no-scrollbar ">
       
        
            {
              card.map((data, index)=>(
                <Fragment key={index}>
                 <div className=" px-[7rem] rounded-md h-full bg-blue-100">{data}</div>
                </Fragment>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
