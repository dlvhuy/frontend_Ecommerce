import { AccountIcon } from "../../../../assets/icon"
import TextProduct from "../../../common/text/textProduct"
import accountImage from "../../../../assets/image/istockphoto-1145811248-612x612.jpg"
import { useSelector } from "react-redux"
const ItemMenuAccount = ({UserName}) =>{
    const {isBack} = useSelector((state) => state.menu)
    return (<div className={`py-2 flex gap-2 items-center ${isBack ? "justify-center" : "p-7" } rounded-md m-2 hover:bg-mainColorDark hover:text-textColorDark cursor-pointer`}>
        <img className="w-[30px] h-[30px] rounded-full bg-white" src={accountImage}/>
        {!isBack && <TextProduct content={UserName} isBig={false}/>}    
    </div>
    )
}
export default ItemMenuAccount