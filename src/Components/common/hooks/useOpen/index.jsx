import { useEffect, useState } from "react"

function useOpen(){
    const [isOpen,setIsOpen] = useState(false)

    useEffect(() =>{},[isOpen])
    const handleOpen =() =>{
        setIsOpen(!isOpen)
    }

    return {isOpen,handleOpen};
}

export default useOpen