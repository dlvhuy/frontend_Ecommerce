import { useSelector } from "react-redux";
import ProductSellers from "../../../../pages/seller/ProductSellers"
import Information from "../../../../Components/item/itemInfomation";
import { LeftIcon, RightIcon } from "../../../../assets/icon";
import { memo } from "react";

// const selects = [{ id: 1, name: "Sản phẩm mới nhất" }, { id: 2, name: "Sản phẩm cũ nhất" }, { id: 3, name: "Sản phẩm giá từ cao xuống thấp" }, { id: 4, name: "Sản phẩm giá từ thấp lên cao" }]
// const categories = [
//     { id: 1, name: "Electronics" },
//     { id: 2, name: "Fashion" },
//     { id: 3, name: "Home & Kitchen" },
//     { id: 4, name: "Beauty & Personal Care" },
//     { id: 5, name: "Sports & Outdoors" },
//     { id: 6, name: "Books" },
//     { id: 7, name: "Toys & Games" },
//     { id: 8, name: "Automotive" },
//     { id: 9, name: "Health & Wellness" },
//     { id: 10, name: "Groceries" },
//     { id: 11, name: "Office Supplies" },
//     { id: 12, name: "Pet Supplies" },
// ];


const BodySeller = memo(() => {

    console.log("BodySeller")
    return (<div className={`w-[95%] transition-all duration-200 flex flex-col gap-3  p-5 shadow-xl rounded-lg mb-3`}>

        <div className="flex gap-1 justify-between ">
            <Information />
            <Information />
            <Information />
            <Information />
            <Information />
        </div>
        <div >
            <ProductSellers />
        </div>
        <div className="flex gap-2 justify-end">
            <div className="cursor-pointer shadow-lg w-[35px] h-[35px] hover:bg-mainColor hover:text-lightTextColor transition-all duration-200 rounded-lg flex justify-center items-center">
                <LeftIcon />
            </div>
            <div className=" cursor-pointer shadow-lg w-[35px] h-[35px] hover:bg-mainColor hover:text-lightTextColor transition-all duration-200 rounded-lg flex justify-center items-center">
                <RightIcon />
            </div>
        </div>
    </div>
    )
})

export default BodySeller