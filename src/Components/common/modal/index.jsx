import { useDispatch, useSelector } from "react-redux"
import { CloseIcon } from "../../../assets/icon"
import Title from "../title"
import { CloseModal } from "../../menu/menuVertical/menuSlice"
import { memo } from "react"

const Modal = memo(({ content }) => {
    const dispatch = useDispatch()
    const {isOpenModal} = useSelector((state) => state.menu)
    return (
        <div className={`absolute w-screen h-screen bg-mainColor bg-opacity-35 flex justify-end `}>
            <div className={`w-1/4 shadow-2xl rounded-lg py-3 bg-white `}>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center mx-3">
                        <Title tilte={"Thêm sản phẩm"} />
                        <div className="cursor-pointer">
                            <CloseIcon onClick={() => dispatch(CloseModal())}/>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                <div className="mt-3">
                    {content}
                </div>
            </div>
        </div>
    )
})
export default Modal