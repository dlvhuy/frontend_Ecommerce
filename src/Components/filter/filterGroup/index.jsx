import TextFilterGroup from "../../common/text/textFilterGroup"
import FilterItem from "../filterItem"

const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Fashion" },
    { id: 3, name: "Home & Kitchen" },
    { id: 4, name: "Beauty & Personal Care" },
    { id: 5, name: "Sports & Outdoors" },
    { id: 6, name: "Books" },
    { id: 7, name: "Toys & Games" },
    { id: 8, name: "Automotive" },
    { id: 9, name: "Health & Wellness" },
    { id: 10, name: "Groceries" },
    { id: 11, name: "Office Supplies" },
    { id: 12, name: "Pet Supplies" },
];

const FilterGroup = () => {
    return (
    <div className="m-4">
        <hr className="font-semibold text-lg text-textColorDark"></hr>
        <div className="flex flex-col gap-2">
            <TextFilterGroup label={"Search Filter"} />
            <div className="flex flex-col">
                {categories.map((item) => (<FilterItem key={item.id} label={item.name} />))}
            </div>
        </div>        
    </div>
    )
}
export default FilterGroup