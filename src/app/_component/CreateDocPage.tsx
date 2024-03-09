import { Button } from "@/components/ui/button";
import axios from "axios";
import { Plus } from "lucide-react";
import { useEffect } from "react";

const CreateDocPage = ({ cancelbtn }: { cancelbtn: (value: boolean) => void }) => {
    
    useEffect(()=>{
        try {
            
        } catch (error) {
            console.log('>>>>>>>>>>>', error.message)
        }
    },[])

    const createDoc = async () => {
        try {
            
            const createdDoc = await axios.post('/api/document/create',{subject:"math"});
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
          
            <div className="h-full absolute w-full bg-slate-900/50">create doc page
            <Button onClick={handleCancel} className="bg-red-500">cancel</Button>
            <Button onClick={createDoc}>Create</Button></div>
        </>
    );
}

export default CreateDocPage;
