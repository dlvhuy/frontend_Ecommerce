import { TriangleIcon } from "../../../../assets/icon";

const Selector = () => {
    return (
        <div className="flex flex-col ">
            <div className="flex w-auto h-[30px] items-center gap-2 bg-mainColor text-textColor justify-center rounded-t-md pl-2 pr-2">
                <span>Chọn danh mục: </span>
                <TriangleIcon />
            </div>
            <div>
                <ul>
                    <li className="hover:bg-mainColor hover:text-textColor  pl-2 pr-2 cursor-pointer">hellworld</li>
                    <li className="hover:bg-mainColor hover:text-textColor  pl-2 pr-2 cursor-pointer">hellworld</li>
                </ul>
            </div>
        </div>


    )
}

export default Selector;