import { FacebookIcon, InstagramIcon } from "../../../../assets/icon"
import TextHeader from "../../../../Components/common/text/textHeader"
import img from "../../../../assets/image/istockphoto-1145811248-612x612-removebg-preview.png"
import Input from "../../../../Components/common/input"
const Header = () =>{
    return(
        <div className="flex flex-col w-5/6 m-auto h-[100px]">
            <div>
                <div className="flex gap-2 items-center bg-mainColor mb-1">
                    <div className="w-[100px] h-auto">
                        <img className="object-contain" src={img}/>
                    </div>
                    <Input width={"w-3/5 h-[60px] hover:border-2"} label={"Tìm sản phẩm"}/>
                    <TextHeader content={"Kênh bán hàng"}/>
                    <div className="flex gap-1 cursor-pointer ">
                        <TextHeader content={"Thông tin thêm"}/>
                        <vr></vr>
                        <FacebookIcon/>
                        <InstagramIcon/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Header