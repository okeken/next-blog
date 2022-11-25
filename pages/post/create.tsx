import { useEffect } from "react";
import { useRouter } from "next/router";
import Input from "@components/commons/Input";
import { postSchema , validationOpt} from "schema";
import { useForm } from "react-hook-form";
import { convertBase64, slugify } from "@utils/index";
import TextArea from "@components/commons/TextArea";
import Button from "@components/commons/Button";
import { useAddPostMutation } from "@services/api";

const validationOption = validationOpt( postSchema);

 const CreatePost = ()=>{

   const {
      register,
      handleSubmit,
      getValues, 
 
      formState: { errors, isDirty, isValid },
      // @ts-ignore
    } = useForm<any>(validationOption);

   const [addPost, result] = useAddPostMutation()
   const {push} = useRouter()

   const {data, isError, isLoading, isSuccess   } = result
   
    const postSlug = data?.slug
    
   useEffect(()=>{
    if(isSuccess && !isError){      
      push(`/post/${postSlug}`)
    }
   },[postSlug])


    const onSubmit =async (values:any)=>{
      const base64Img = await convertBase64(values?.coverPicture[0])
      const postData = {...values, coverPicture:base64Img}
      await addPost(postData)     
    
     }
   

    return <>
     <div className="max-w-2xl px-5 m-auto mt-8">
        <h1 className="my-2 text-2xl">Create Post</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
  
        <div className="mb-3">
         <Input 
         register={register}
         disabled={isLoading}
         currentValue={getValues('title')}
         placeholder="Your post title"
         name="title" 
         required label="Title" errors={errors}
           />
        </div>

        <div className="mb-3">
          <TextArea
             disabled={isLoading}
             label="Yor Post Body"
             register={register}
          
             name="description" 
             errors={errors}
             currentValue={getValues("description")}
             required
           />
        </div>
     
        <div className="mb-3">
         <Input 
         type="file"
         register={register}
         disabled={isLoading}
         currentValue={getValues('coverPicture')}
         placeholder="Your post title"
         name="coverPicture" 
         required label="Upload Pic" errors={errors}
          />
        </div>
              <Button
        // disabled
        disabled={!isValid || !isDirty ||  isLoading} 
        >
       
    
  
        {isLoading ? <div className="flex items-center justify-center mx-auto rounded-full h-9 w-9 bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
      <div className="w-6 h-6 bg-red-400 rounded-full"></div>
    
  </div>: " Create Post"}
        </Button>
        </form>
     </div>
    </>
}

export default CreatePost