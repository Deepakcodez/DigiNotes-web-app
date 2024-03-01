import Navbar from "@/components/navbar/page";
import Sidebar from "@/components/sidebar/page";

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (  
          <>
          <div className="flex
          ">
          <Sidebar/>
          <div className=" relative w-full  ">
          <Navbar/>
           {children}
          </div>
          </div>
          </>
    );
}

export default layout;