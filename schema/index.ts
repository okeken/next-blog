import { string, object, mixed  } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { isImageSupported } from "@utils/index";
import millify from "millify";

export function validationOpt(schema:any) {
  return { mode: "all", resolver: yupResolver(schema) }
};

const MAX_FILE_SIZE=900000
export const postSchema = object().shape({
  title: string()
    .required("title is required")
    .min(8, "title must be more than 4 characters"),
   
  description: string()
    .required("description is required")
    .min(20, "description must be more than 20 characters"),
    coverPicture:mixed() 
  .test("fileSize", "cover picture is required", (value) => {
    if (!value?.length) return false // attachment is required
    return true
  }) 

  
  .test({
    message: "unsupported image ",
    test: (file) => {
     
         const isValid = isImageSupported(file[0]?.name) 
      return isValid;
    }
  })
 
  .test({
    message: `File too big, can't exceed ${ millify(MAX_FILE_SIZE, {
      units: ["B", "KB", "MB", "GB", "TB"],
      space: true,
    })}`,
    test: (file) => {
    
      const isValid = file[0]?.size < MAX_FILE_SIZE;
      return isValid;
    }
  })
 
    
})






