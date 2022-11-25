
interface IButton {
    // children: React.ReactNode 
    className?: string;
    // All other props
    [x: string]: any;

} 

const Button = ({children, className,disabled, ...props}:IButton)=>{
   return (<button
   disabled={disabled}
    className={`block w-full p-4 font-bold text-white bg-red-500 rounded-lg ${className} disabled:cursor-not-allowed disabled:bg-red-400`}  {...props}>
        {children}
   </button>)
}

export default Button