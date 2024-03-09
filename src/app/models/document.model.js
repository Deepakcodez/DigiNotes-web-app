
import mongoose from "mongoose";

const docSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: [true, 'Subject is required'],
        minlength: [1, 'Enter name properly']
    },
    content: {
        type: String,
        default : "doc",
    },
    createdBy: {
        type: String,
        required: true
    }
}, { timestamps: true });


const Document = mongoose.models.Document || mongoose.model('Document', docSchema);

export default Document;
