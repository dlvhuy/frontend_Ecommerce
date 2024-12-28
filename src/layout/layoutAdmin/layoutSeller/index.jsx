import { Outlet } from "react-router-dom";
import BodySeller from "./BodySeller";
import HeaderSeller from "./HeaderSeller";
import MenuVertical from "../../../Components/menu/menuVertical";
import ContentModalProduct from "../../../Components/item/itemProduct/contentModalProduct";
import Modal from "../../../Components/common/modal";
import { useDispatch, useSelector } from "react-redux";
import { GetCategorys, GetProducts } from "../../../axios/Services/StoreService";
import { useEffect } from "react";

const LayoutSeller = () => {

    const { isOpenModal } = useSelector((state) => state.menu)
    const {CategoryData} = useSelector((state) =>state.store)
    const dispatch = useDispatch()
    useEffect(() =>{
            dispatch(GetProducts())
            return () =>{}
    },[dispatch])
   

    useEffect(() =>{
        
            dispatch(GetCategorys())
        return () =>{}
    },[dispatch])


    console.log("Category",CategoryData)
    return (<>
        <div className="w-[95%] mt-[30px] flex flex-col items-center overflow-y-scroll">
            <HeaderSeller />
            <Outlet />
        </div>
        {isOpenModal && <Modal content={<ContentModalProduct />}></Modal>}
    </>


    )
}
export default LayoutSeller;