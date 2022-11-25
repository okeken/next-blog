import Image from "next/image"
import Link from "next/link"
import { IPost } from "types"


export const Card = ({data}:any)=>{
    const {coverPicture, title, slug, description}:IPost & {slug:string} =data
    return <div>
           <Link href={`./post/${slug}`}>
        <div className=" rounded-sm md:mt-2 dark:bg-gray-800  border dark:border-0" >
       
     
        <Image
                        src={coverPicture}
                        alt="post"
                        width={400}
                        height={400}
                        layout="responsive"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                    />
            
        <div className='w-full p-2 m-auto text-center'>       
        <div className="font-semibold capitalize text-2xl my-1"> {title.slice(0,20)} </div>
        <div className="opacity-100" >{description.slice(0,35)}...</div>

      
          
        </div>
   

       
    </div>
    </Link>
        </div>
}

