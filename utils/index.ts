import { supportedImages } from "config/constant"


export const isImageSupported =(fileName:string='', supportedImg:string[]=supportedImages)=>{
 
  const dot = fileName.indexOf(".")
  const file  =fileName?.split("").slice(dot+1).join("")
  const isSupported = supportedImg.includes(file)
  return isSupported
}

export const convertBase64 = (file:any) => {
      return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  export const slugify = (text:string) => {
    const newText =text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
    
    return newText
  };