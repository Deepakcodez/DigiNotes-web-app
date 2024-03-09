import mongoose from "mongoose";


const docSchema = new mongoose.Schema({

    subject:{
        type : String,
        required : true
    },
    content : {
        type : String,
    },
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
    

},{timestamps:true});

const Doc = mongoose.models.Doc || mongoose.model('Doc', docSchema);

export default Doc;