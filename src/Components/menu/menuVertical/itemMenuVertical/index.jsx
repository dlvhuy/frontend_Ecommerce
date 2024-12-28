import { useSelector } from "react-redux"
import { TriangleIcon } from "../../../../assets/icon"
import useOpen from "../../../common/hooks/useOpen"
import ItemSubMenuVertical from "../itemSubMenuVertical"
import { useNavigate } from "react-router-dom"


const ItemMenuVertical = ({ menuData}) => {
    const { isOpen, handleOpen } = useOpen()
    const {isBack} = useSelector((state) => state.menu)
    
    const navigate = useNavigate()
    
    const handleNavigate = (path) =>{
        navigate(path)
    }
    const handleClick = (path) =>{
        if (path) 
            return handleNavigate(path)
        else 
            return handleOpen()
    }
    return (<div>
        <div onClick={() =>handleClick(menuData.path)} 
            className={`transition-all duration-300 cursor-pointer  py-2 flex gap-2  hover:bg-mainColorDark hover:text-white hover:duration-200  justify-between items-center ${isBack ? "p-4" : "p-5"} rounded-md m-1`}>
            <ItemSubMenuVertical content={menuData.content} icon={menuData.icon} />
            {menuData.subMenu && <TriangleIcon isOpen={isOpen} />}
        </div>
        {isOpen && menuData.subMenu && (
            <ul>
            {menuData.subMenu.map((item) => (
                <li onClick={() => handleNavigate(item.path)} 
                    className= {`rounded-md ${isBack ? "m-1 pl-4" : "m-1 pl-10"} transition-all duration-300 hover:bg-mainColorDark hover:text-white  hover:duration-200  cursor-pointer`}>
                    <ItemSubMenuVertical key={item.id} content={item.content} icon={item.icon}/>
                </li>
                ))}
            </ul>
        )}
    </div>)
}

export default ItemMenuVertical