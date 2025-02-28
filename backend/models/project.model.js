import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        lowercase:true,
        required:true,
        trim:true,
        unique:true,
    },
    users:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
        }
    ],
    fileTree:{
        type:Object,
        default:{},
    },
    messages: [
        {
            sender: {
                type: mongoose.Schema.Types.Mixed,
                ref: "user", // Reference to User model
                required: true
            },
            message: {
                type: String,
                required: true,
            },
        }
    ]

},{ minimize: false }); 

const Project = mongoose.model("project",projectSchema);

export default Project;