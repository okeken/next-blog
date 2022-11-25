import type { NextApiRequest, NextApiResponse } from "next";
import  { createRouter }  from "next-connect";
import connectDB, { closeDB } from "@server/config/database";
import PostDb from "@server/models/post"
import cloudinary from "@server/config/cloudinary";
import { slugify } from "@utils/index";


const router = createRouter<NextApiRequest, NextApiResponse>();

router
.use(async(req:NextApiRequest,res:NextApiResponse,next:any)=>{
  await connectDB()
  return next()
})


.get(async(req:NextApiRequest,res:NextApiResponse)=>{

    const {slug} = req.query
   
  let post;
  try {

    if(slug) {
      post =   await PostDb.findOne({
        slug
       })
    } else {
      post = await PostDb.find({})
    }
   
    return res.status(200).json({
      status:true,      
      data:post,
      message:'post fetched successfully'
    })
  }

  catch(e){
    console.log('server error', e)
    return res.status(500).json({
        status:false,
        error:e,
        message:'server error'
    })
  }

})

.post(async(req:NextApiRequest,res:NextApiResponse)=>{
  const {title, description, coverPicture} = req.body
  try {

    const {secure_url:picUrl} = await cloudinary.uploader.upload(coverPicture)

  const slug = slugify(title)
    const post = new PostDb({
      title,
      description,
      coverPicture:picUrl,
      slug  
    })
    const { _doc } = await post.save();
    return res.status(201).json({
      status:true,
      data:_doc,
      message:'post created successfully'
    })

  }

  catch(e){

    return res.status(500).json({
      status:false,
      error:e,
      message:'error creating post'
    })

  }
  finally{
    // await  closeDB()
  }

})








export default router.handler({
  // @ts-ignore
  onError: (err, req, res, next) => {
    console.error(err.stack);
    reportError(err)
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req:NextApiRequest, res:NextApiResponse) => {
    res.status(404).end("Page is not found info");
  },
});
