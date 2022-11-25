import Link from "next/link"
import ThemeSwitch from "./switch"


 const Header = ()=>{
    return <div className='flex justify-between max-w-6xl p-6 mx-auto '>
        <div>
            <Link href='/'>
            My Blog
            </Link>
            </div>
        <div className="flex items-center">
            <div >
                <Link href='/post/create' className="flex items-center p-2 mr-6 text-white bg-red-500 rounded-md">
  <svg className="mr-1 text-xl" stroke="white" fill="white" strokeWidth={0} viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" /></svg>

            Post
                </Link>
                </div>

                <div className="">     <Link href='/post'>
                Posts
                </Link> </div>
           <ThemeSwitch />
               </div>
    </div>
}

export default Header