"use client"
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";


interface CreateDocPageProps {
    cancelbtn: (value: boolean) => void;
    userId: string;
}
const CreateDocPage = ({ cancelbtn, userId }: CreateDocPageProps) => {
    
    const [subject, setSubject] = useState("")
      
    const createDoc = async () => {
        try {
            
            const createdDoc = await axios.post('/api/document/create', 
            {
                subject
            });
            console.log('Document created:', createdDoc);
            cancelbtn(false);

        } catch (error) {

            console.error('Error creating document:', error);

        }
    }

    const handleCancel = () => {
        console.log('Cancel button clicked');
        cancelbtn(false);
    }

    return (
        <>
          
            <div className=" h-[calc(100vh-3rem)] z-30 absolute w-full left-0   bg-slate-900/25 flex  justify-center items-center ">
               <div className="bg-gray-50 shadow-md w-[25rem] rounded-lg p-2 flex flex-col gap-4">
                <h1>Document name</h1>
                <input 
                value={subject}
                onChange={(text)=>setSubject(text.target.value)}
                className="border h-11 px-2"
                />
                <div className="w-full flex gap-4">
                <Button
                    variant={"redOutline"}
                    className="w-full"
                    onClick={handleCancel} >cancel
                </Button>
                    <Button
                    className="w-full"
                     variant={"blue"}
                    onClick={createDoc}>Create
                </Button>
                    
                </div>
                </div>
               </div>
        </>
    );
}

export default CreateDocPage;
