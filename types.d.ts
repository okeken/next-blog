export interface IElementProps {
    children?: React.ReactElement;
    className?: string;
    // All other props
    [x: string]: any;
  }
  
  export interface IEmail {
    email: string;
  }



  interface IPost {
    title:string
    description:string
    coverPicture:string
    _id?:String
}

  
