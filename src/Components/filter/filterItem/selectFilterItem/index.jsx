const SelectFilterItem = ({value, categories,onSelectChange,style="" }) => {

    console.log("SelectfilterItem:",value)
   
    return (
        <>
            <select onChange={onSelectChange} value={value} className="w-[200px] m-1 h-[50px] border-1 pl-2 rounded-sm shadow-2xl" id="dropdown" name="options" >
                <option className=" rounded-md pl-4 pr-2 cursor-pointer "value={0}> Select option </option>
                {categories.map((item,index) => (<option key={index} className="h-[40px] hover:bg-red" value={item.id}>{item.name}</option>))}
            </select>
        </>
    )
}
export default SelectFilterItem;