"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Home() {
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
      <h1>Home</h1>
      <Button onClick={logoutHandler}>Logout</Button>
    </>
  );
}
