import mongoose from "mongoose";



const Schema = mongoose.Schema;
const postSchema = new Schema(
  {
  
    title: {
        type: String,       
        required: true,
    },
    coverPicture:{
        type: String,
    },
    description:{
        type: String,
        required: true,
    },
    slug:{
      type: String,
      required: true,
    }
  },

  { timestamps: true }
);


const posts =
  mongoose.models.post || mongoose.model("post", postSchema, "post");
export default posts;
