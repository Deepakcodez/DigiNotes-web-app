"use client"
import EditorJS from '@editorjs/editorjs';
import { useEffect } from 'react';
import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 
const Editor = () => {


    useEffect(()=>{
        initEditor()
    },[])



    const initEditor=()=>{
        const editor = new EditorJS({
  
            holder: 'editorjs',

            tools: { 
                header: Header, 
                list: List 
              }, 

             });  
    
    }

    return ( 
    <>

<div id="editorjs"></div>


    </>
     );
}
 
export default Editor;