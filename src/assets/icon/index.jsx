import { FaRegHeart, FaSketch } from "react-icons/fa6";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { IoStarSharp } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoArrowBackOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { MdArrowBackIosNew } from "react-icons/md";
export const HeartIcon = ({isClick = false,color=true}) =>{
    return <>
        {isClick ? <FaHeart className={`text-red text-base ${color ? "text-textColor" : ""}`}/> :<FaRegHeart className={`hover:text-red ${color ? "text-textColor" : ""}`}/>} 
    </>
};

export const BackIcon = ({onClick,style}) =>{
    return <>
        <IoArrowBackOutline onClick ={onClick} className={` text-textColor ${style} `}/>
    </>
};


export const BasketIcon = () =>{
    return <div className=" cursor-pointer rounded-3xl border-black border-solid border-[1px] w-[27px] h-[27px] flex justify-center items-center hover:bg-mainColor hover:text-textColorDark ">
        <RiShoppingBasketLine />
    </div>
};

export const TriangleIcon = ({isOpen = false}) =>{
    return(
        <GoTriangleDown className={`text-textColor transition-transform ${isOpen ? "rotate-180" :""}`}/>
    )
}
export const HalfStar = () =>{
    return(
        <IoStarHalf className="text-red-400"/>
    )
}

export const FullStar = () =>{
    return(
        <IoStarSharp className="text-red-400"/>
    )
}

export const LeftIcon = () =>{
    return(
        <MdArrowBackIosNew/>
    )
}

export const RightIcon = () =>{
    return(
        <MdArrowBackIosNew className="rotate-180"/>
    )
}

export const AccountIcon = () =>{
    return(
        <RiAccountCircleLine className="text-2xl font-bold" />
    )
}
export const OutLineStar = () =>{
    return(
        <IoStarOutline className="text-red-400"/>
    )
}

export const CloseIcon = ({onClick}) =>{
    return(
        < IoClose onClick={onClick}/>
    )
}
export const FacebookIcon = () =>{
    return(
        <FaSquareFacebook />
    )
}

export const InstagramIcon = () =>{
    return(
        <AiFillInstagram />
    )
}


export const ThreeDotsIcon = () =>{
    return(
        <BsThreeDotsVertical  className="hover:text-mainColor cursor-pointer"/>
    )
}