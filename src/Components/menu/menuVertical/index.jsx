
import { BackIcon, HeartIcon } from "../../../assets/icon";
import ItemMenuVertical from "./itemMenuVertical";
import icon from "../../../assets/image/istockphoto-1145811248-612x612-removebg-preview.png"
import ItemMenuAccount from "./itemMenuAccount";
import { useDispatch, useSelector } from "react-redux";
import { Open } from "./menuSlice";
import { useNavigate } from "react-router-dom";


const MenuVertical = () => {
    
    const {isBack} = useSelector((state) => state.menu)
    const dispatch = useDispatch()

    const components = [
        {
            id: 1, content: "Sản phẩm", icon: <HeartIcon /> , subMenu: [
                { id: 2, content: "Sản phẩm A", icon: <HeartIcon />, path:"/Admin/Products" },
                { id: 3, content: "Sản phẩm B", icon: <HeartIcon /> },
                { id: 4, content: "Sản phẩm C", icon: <HeartIcon /> }]
        },
        {
            id: 5, content: "Dữ liệu ", icon: <HeartIcon />, subMenu: [
                { id: 6, content: "Dữ liệu A", icon: <HeartIcon />,path:"/Admin/Analyze" },
                { id: 7, content: "Dữ liệu B", icon: <HeartIcon /> },
                { id: 8, content: "Dữ liệu", icon: <HeartIcon /> }]
        },
        { id: 9, content: "C", icon: <HeartIcon/> },
        { id: 10, content: "Setting", icon: <HeartIcon />,path:"/Admin/Setting"},
        { id: 11, content: "Notification", icon: <HeartIcon /> }
    ];

    const components2 = { id: 3, content: "Account" }

    //${isBack ? "w-[3%]" :"w-[14%]"}
    return (
        <div className={`${isBack ? "w-[3%] min-w-[55px]" :"w-[14%] min-w-[250px]"} transition-all duration-200 bg-mainColor rounded-md flex flex-col justify-between`}>
            <div className="">
                <div className="flex justify-between items-center h-[100px]   transition-all duration-300">
                    {!isBack && <img className="h-[100px]" src={icon} />}
                    <BackIcon onClick={() => dispatch(Open())} style={`cursor-pointer hover:text-textColorDark w-auto  text-3xl transition-transform ${isBack ? " rotate-180 m-auto " : "px-5 rotate-0"}`} />
                </div>
                <div className="relative top-0">
                    {components.map((item) => (
                        <ItemMenuVertical key={item.id} menuData={item}/>
                    ))}
                </div>
            </div>
            <div>
                <ItemMenuAccount key={components2.id} UserName={components2.content}/>
            </div>
        </div>

    )
}
export default MenuVertical;