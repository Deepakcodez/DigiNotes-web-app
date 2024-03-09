"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment , useEffect, useRef, useState} from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { HorizontalScrollCarousel } from "@/components/boardcard/boardscroll/page";
import { number } from "zod";
import CreateDocPage from "../_component/CreateDocPage";
import useSWR  from 'swr'
import moment from 'moment'

export default function Home() {
  const router = useRouter();
  const card = [1, 1, 1, 1, 1, 1, 1, 1];
  const [width, setWidth] = useState(0)
  const [showCreateDoc,setShowCreateDoc] = useState<boolean>(false)
  const carousel = useRef()
  const [userId, setUserId] = useState<string>("invalid user")
  
  useEffect(()=>{
    const getUser=async()=>{

      try {
          const resp = await axios.get('/api/auth/me');
          console.log('>>>>>>>>>>>', resp)
          setUserId(resp.data.data._id)
      } catch (error:any) {
          console.log('>>>>>>>>>>>', error.message)
      }
    }
   
    getUser()
  },[])

  const { data, error } = useSWR('/api/document/docs', async (url) => {
    try {
      const resp = await axios.get(url);
      console.log('>>>>>>>>>>>', resp.data.payload);
      return resp.data.payload;
    } catch (error) {
      console.log('>>>>>>>>>>>', error);
      throw new Error('Failed to fetch data');
    }
  });

  const clickHandler=(docID:string)=>{
    console.log('>>>>>>>>>>>', docID)
    router.push(`/doc/${docID}`)
  }

  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth  )
    console.log('>>>>>>>>>>>', carousel.current.scrollWidth - carousel.current.offsetWidth )
  },[])

  return (
    <>
      <div className="relative pt-[3rem] bg-gray-900  h-full px-2">
      {showCreateDoc &&  <CreateDocPage cancelbtn={setShowCreateDoc} userId={userId} /> }
        <div className="text-5xl  text-white px-5 mt-5">Boards</div>
        {/* parent box */}
        <div className="bg-gray-20  mt-[3rem] md:mt-[0] rounded-md h-[70vh] md:h-[55vh] p-2 md:p-5 flex flex-col md:flex-row gap-2">
          <div className="px-[5rem] rounded-lg h-[3rem] md:h-full bg-blue-500 flex justify-center items-center"
          onClick={()=>{setShowCreateDoc(!showCreateDoc)}}
          > 
            <Plus color="white" size={40}/>
          </div>
          {/* cards */}
          <motion.div ref={carousel}  className=" w-full flex flex-row gap-2 overflow-hidden">
          <motion.div
          drag='x'
          dragConstraints={{right:0, left:-width}}
          className="  flex gap-3">
           {data && data.map((card, index) => (
              <Fragment key={index}>
                <motion.div
                 initial={{ opacity: 0, x: -60 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{
                   type: "spring",
                   stiffness: 150,
                   duration: .2,
                   delay: (index * 0.3) }}
                   onClick={()=>clickHandler(card._id)}
                  className=" w-[15rem] flex flex-col items-center justify-between p-5 rounded-md h-[20rem] md:h-full bg-blue-300  hover:bg-blue-400/75  cursor-grab ">
                 
                  <h1 className="text-3xl text-center">
                  {card.subject}
                  </h1>
                  <h1 className="font-bold text-5xl text-blue-950/25">DOCS</h1>
                  <h1 className="text-xs self-end text-blue-900/75 ">{moment(card.createdAt).add(3, 'days').calendar() }</h1>
                  
                  </motion.div>
              </Fragment>
            ))}
    
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
