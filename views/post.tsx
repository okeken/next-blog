import { Card } from "@components/Card"
import { useGetPostsQuery } from "@services/api"
import { IPost } from "types"

interface IPostData extends IPost {
  slug:string
}


const Post = ()=>{
    
    const {data, isLoading, isError} = useGetPostsQuery(1)

    const _noPostYet = (!data?.length && !isLoading) && "No post yet"
   
    const _loading =(isLoading && !isError )&& <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 animate-pulse">
      {
      new Array(3).fill(0).map((_, index)=>
   <div key={index} className="h-80 bg-gray-300 rounded-md dark:bg-gray-600 w-full"  />
   
       
       
         )
  
      }

      
    </div>


    const _data = (data?.length && !isError) ? <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

      {
         data?.map(((post:IPostData)=>(<div className="rounded-xl" key={post._id as string}>
          <Card 
         
             data={post}
             />
            
           </div>))) 
      }
      
    </div>:""
 
    return <div className=" p-4 mx-auto mt-12 " style={{
      maxWidth:"72rem"
    }} >
 {_data}
 {_noPostYet}
 {_loading}
    

    </div>
}


export default Post