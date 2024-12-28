import { memo } from "react"
import { ThreeDotsIcon } from "../../../../assets/icon"
import ImageProduct from "../../../common/image/imageProduct"
import Rate from "../../../common/input/rate"
import TextProduct from "../../../common/text/textProduct"
import TitleProduct from "../../../common/title/titleProduct"
import FilterItem from "../../../filter/filterItem"

const ProductSeller = memo((item) => {

    console.log("item: ",item.item)
    return (
    <tr className={`text-center ${item.item.id % 2 == 0 ? "bg-lightTextColor" : "bg-lightTextColor2"}`}>
        <td><FilterItem/></td>
        <td className="flex justify-center"><ImageProduct img={item.item.image}/></td>
        <td><TextProduct content={item.item.name}/></td>
        <td><TextProduct isBig={false} content={item.item.id}/></td>
        <td ><Rate/></td>
        <td><TextProduct isBig={false} content={item.item.sellingPrice}/></td>
        <td><TextProduct isBig={false} content={item.item.costPrice}/></td>
        <td><TextProduct isBig={false} content={item.item.quantity}/></td>
        <td><TextProduct isBig={false} content={item.item.idCategory}/></td>
        <td><TextProduct isBig={false} content={"Hãng"}/></td>
        <td><ThreeDotsIcon/></td>
    </tr>

    )
})
    
export default ProductSeller;