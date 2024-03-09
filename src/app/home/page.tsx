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

  export default function Home() {
    const router = useRouter();
    const card = [1, 1, 1, 1, 1, 1, 1, 1];
    const [width, setWidth] = useState(0)
    const [showCreateDoc,setShowCreateDoc] = useState<boolean>(false)
    const carousel = useRef()


    useEffect(()=>{
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth  )
      console.log('>>>>>>>>>>>', carousel.current.scrollWidth - carousel.current.offsetWidth )
    },[])

    return (
      <>
        <div className="relative pt-[3rem] bg-gray-900  h-full px-2">
        {showCreateDoc &&  <CreateDocPage cancelbtn={setShowCreateDoc} /> }
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
              {
                card.map((data, index)=>(
                  <Fragment key={index}>
                  <div className=" px-[7rem] rounded-md h-[20rem] md:h-full  bg-blue-300 cursor-grab">{data}</div>
                  </Fragment>
                ))
              } 
      
              </motion.div>
            </motion.div>
          </div>
        </div>

      </>
    );
  }
