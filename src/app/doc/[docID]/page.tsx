"use client"
import Editor from "@/app/_component/Editor";
import WebView from "@/app/_component/WebVeiw";
const Doc = () => {
  return ( 
    <>
    <h1>doc</h1>
    <div className=" grid grid-cols-1 md:grid-cols-2">
      <div className="h-screen bg-blue-100">
    <Editor/>
      </div>
    <div className="w-full bg-slate-900">
      <WebView/>
    </div>
    </div>
    </>
   );
}
 
export default Doc;