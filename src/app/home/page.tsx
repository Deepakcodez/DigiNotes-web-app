"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  
  return (
    <>
    <div className="pt-[3rem] bg-gray-100 h-full">

      <h1>Home</h1>
     
    </div>
    </>
  );
}
