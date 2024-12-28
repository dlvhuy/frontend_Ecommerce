const FilterItem = ({label = null}) =>{
    return (
        <div className="flex gap-2 items-center justify-center">
            <input className="text-lg w-4 h-4" type="checkbox" content="cái gí đó đó"/>
            <label className="font-normal text-lg">{label}</label>
        </div>
    )
}
export default FilterItem