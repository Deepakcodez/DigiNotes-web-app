import Navbar from "@/components/navbar/page";

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (  
          <>
        
          
          <div className=" relative w-full h-screen   ">
          <Navbar/>
           {children}
          </div>
          
          </>
    );
}

export default layout;