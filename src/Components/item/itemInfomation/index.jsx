import TextProduct from "../../common/text/textProduct"
import TitleProduct from "../../common/title/titleProduct"

const Information = ({style = "w-[300px] h-[100px]"}) =>{
    return (<div className={` ${style} shadow-lg p-4  rounded-md flex  flex-col gap-3 justify-center items-center`}>
        <TextProduct content={"Hàng tồn kho"}/>
        <TitleProduct content={"Số lượng"}/>
    </div>)
}
export default Information