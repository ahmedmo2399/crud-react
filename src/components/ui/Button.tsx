import { ReactNode } from "react"

interface IProps {
    children:ReactNode;
    className?:string;
    width?:'w-full'|'w-fit'; 
}

const Button = ({children,className,width = 'w-full',...rest}: IProps) => {
  return (
    <button className={`${className}${width} rounded-md text-whit p-2 cursor-pointer`} {...rest}>
      {children}
    </button>
  )
}

export default Button
