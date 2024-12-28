import { useDispatch, useSelector } from "react-redux";
import { ProductSeller } from "../../../Components/item/itemProduct";
import { memo, useEffect } from "react";
import { GetProducts } from "../../../axios/Services/StoreService";

const ProductSellers = memo(() => {
    const {Data} = useSelector((state) => state.store)
   
    
    console.log(Data)
    return (
        <div className="flex flex-col w-[100%]">
            <table className="border-0">
                <thead className="bg-mainColor text-textColor ">
                    <tr className="bg-gray-200 h-[50px]">
                        <th className="border-0 "></th>
                        <th className="border-0 ">Hình ảnh</th>
                        <th className="border-0 ">Tên sản phẩm</th>
                        <th className="border-0 ">Mã sản phẩm</th>
                        <th className="border-0 ">Đánh giá</th>
                        <th className="border-0 ">Giá bán</th>
                        <th className="border-0 ">Giá vốn</th>
                        <th className="border-0 ">Số lượng</th>
                        <th className="border-0 ">Thể loại</th> 
                        <th className="border-0 ">Trạng thái</th>
                        <th className="border-0 "></th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map((item) => (<ProductSeller item={item}/>))}
                    
                    
                </tbody>
            </table>
        </div>

    )
})
export default ProductSellers;