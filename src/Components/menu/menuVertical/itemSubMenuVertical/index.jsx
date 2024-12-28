import { useState } from "react"
import TextProduct from "../../../common/text/textProduct"
import TitleProduct from "../../../common/title/titleProduct"
import { TriangleIcon } from "../../../../assets/icon"
import useOpen from "../../../common/hooks/useOpen"
import { useSelector } from "react-redux"

const ItemSubMenuVertical = ({ icon, content,navigate}) => {
    const {isBack} = useSelector((state) => state.menu)
    return (
        
        <div onClick={navigate} className={`${isBack ? "py-2 flex items-center": "py-2 flex gap-2 items-center p-5"} `}>
            <div>{icon}</div>
            {!isBack && 
             <TextProduct content={content} isBig={false} textColor={"text-textColor"} />
            }   
        </div>
       
    )
}// 
export default ItemSubMenuVertical