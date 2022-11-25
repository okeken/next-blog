import Image from "next/image"
import { useGetPostQuery } from "@services/api"
import { useRouter } from "next/router"

const formatDate = (dateString:string) => {
  return new Date(dateString).toDateString()
}

const Post = ()=>{
    const {query} = useRouter()
    const slug = query.slug
    const {data:{coverPicture, title,description, createdAt }={}, isLoading, isError} = useGetPostQuery(slug)
   
  
 const _loading = isLoading && <div role="status" className="p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
  
 <div className="h-12 bg-gray-200 rounded-full dark:bg-gray-700 mb-6" />

 <div className="flex items-center justify-center h-60 mb-4 bg-gray-300 rounded dark:bg-gray-700">

   <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
 </div>
 <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
 <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
 <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
 <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700" />

   </div>
   const _data = (description && !isError) && <div className="p-4 border border-gray-200 rounded shadow  md:p-6 dark:border-gray-700">
        <h1 className="mb-6 text-6xl text-center capitalize font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-600">
        {title}
      </h1>
      <div className="my-10">
      <Image
                        src={coverPicture}
                        alt="Profile"
                        priority={true}
                        width={800}
                        height={800}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                    />
                    <div className="font-semibold mt-2">Posted on {" "}
                    {formatDate(createdAt)}
                    </div>
      </div> 
    
      <hr
            className="dark:bg-gray-700 w-24 h-[2px] mx-auto my-8 bg-gray-200 border-0 " />
      
      <div className="mt-6 text-lg">
        {description}
        </div>


   </div>
    return <div className="max-w-3xl p-4 mx-auto mt-12">
       {_loading}
       {_data}


 
    </div>
}


export default Post