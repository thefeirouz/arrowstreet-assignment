import { ReactNode } from "react"

interface IProps {
    children: ReactNode
}
export const RegistrationInputWrapper = ({children}: IProps) => {
    return <div className="registration-input-div">
        {children}
    </div>
    
}