import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../Components/common/button";
import Input from "../../../../Components/common/input";
import Title from "../../../../Components/common/title";
import { OpenModal } from "../../../../Components/menu/menuVertical/menuSlice";
const HeaderSeller = () => {

    const dispatch = useDispatch()

    return (
        <div className="w-[95%] rounded-sm px-5 ">
            <Title tilte={"San Pham"} />
            <div className="flex  items-center justify-between">
                <div className="flex gap-2 items-center">
                    <Input label={"Search sản phẩm"} width="w-[400px]" />
                    <Button label={"Lọc nâng cao"} style="w-[150px] h-[40px]" />
                </div>
                <div>
                    <Button onClick={() => dispatch(OpenModal())}   label={"Thêm sản phẩm"} style="w-[150px] h-[50px]" />
                </div>
            </div>
            <hr className="text-navBarText h-3 text-xl font-semibold mt-5 opacity-20"></hr>
            {/* {isOpen && <Modal content={<ContentModalProduct/>}></Modal>} */}
        </div>

    )
}

export default HeaderSeller;