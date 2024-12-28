const PriceFilterItem = () =>{
    return(<div className="flex gap-1 mt-1">
    <input  placeholder="Từ" className="pl-1 w-[100px] h-[30px]  rounded-md"/>
    <p>-</p>
    <input  placeholder="Đến" className="pl-1 w-[100px] h-[30px]  rounded-md"/>
    </div>)
}

export default PriceFilterItem;