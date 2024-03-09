import Footer from "@/components/footer/page";
import Welcome from "@/app/_component/Welcome";
import Image from "next/image";
import Navbar from "./_component/Navbar";


export default function Home() {
  return (
    <>
       <Navbar/>
       <Welcome/>
     <Footer />
    </>
  );
}
