

import { BasketIcon, HeartIcon } from "../../../../assets/icon";
import ImageProduct from "../../../common/image/imageProduct";
import Rate from "../../../common/input/rate";
import TitleProduct from "../../../common/title/titleProduct";







const Product = ({tenSanPham = "Giày tây siêu dẹp",giaSanPham = "200"}) => {
    return (
        <div className="relative flex flex-col gap-2 w-[250px] h-auto rounded-md m-1 p-2 cursor-pointer">
            <ImageProduct />
            <div className="absolute top-10 right-3">
                <HeartIcon color={false}/>
            </div>
                <TitleProduct content={tenSanPham} />
                <Rate/>
            <div className="flex justify-between items-center">
                <TextProduct content={`${giaSanPham}$`} />
                <BasketIcon />
            </div>
        </div>
    )
}

export default Product;