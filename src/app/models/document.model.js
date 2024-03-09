import mongoose from "mongoose";
import { string } from "zod";

const docSchema = new mongoose.Schema({

    subject:{
        type : String,
        required : true
    },
    content : {
        type : string,
    }
    

});

const Doc = mongoose.models.Doc || mongoose.model('Doc', docSchema);

export default Doc;