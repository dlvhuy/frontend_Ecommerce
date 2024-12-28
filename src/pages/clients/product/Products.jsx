import Selector from "../../../Components/common/input/selector";
import FilterGroup from "../../../Components/filter/filterGroup";
import FilterItem from "../../../Components/filter/filterItem";
import PriceFilterItem from "../../../Components/filter/filterItem/priceFilterItem";
import SelectFilterItem from "../../../Components/filter/filterItem/selectFilterItem";
import Product from "../../../Components/Product";

const products = [
    { id: 1, name: "Laptop Dell XPS 13", price: 1100 }, // $1,100
    { id: 2, name: "iPhone 15 Pro Max", price: 1500 },  // $1,500
    { id: 3, name: "Tai nghe Sony WH-1000XM5", price: 350 }, // $350
    { id: 4, name: "Bàn phím cơ Keychron K2", price: 85 },  // $85
    { id: 5, name: "Màn hình LG UltraGear 27\"", price: 300 }, // $300
    { id: 6, name: "Chuột Logitech MX Master 3 Chuột Logitech MX Master 3", price: 100 }, // $100
    { id: 7, name: "Loa Bluetooth JBL Flip 6 Chuột Logitech MX Master 3 Chuột Logitech MX Master 3", price: 130 },  // $130
    { id: 8, name: "Ổ cứng SSD Samsung 1TB", price: 150 },   // $150
    { id: 9, name: "Smartwatch Garmin Fenix 7", price: 650 }, // $650
    { id: 10, name: "Máy ảnh Sony Alpha A7 III", price: 1700 }, // $1,700
    { id: 11, name: "Đèn bàn thông minh Xiaomi", price: 40 },  // $40
    { id: 12, name: "Máy lọc không khí Sharp", price: 250 },  // $250
];
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

const Products = () => {
    return (
    <div className="flex flex-col w-5/6 m-auto">
            <div className="flex gap-5 items-center justify-end w-[84%] ml-[14%]">
                <SelectFilterItem categories={categories} />
                <PriceFilterItem></PriceFilterItem>
            </div>
            <div className="flex">
                <div className="w-[14%]">
                    <FilterGroup />
                </div>
                <div className="flex flex-wrap w-[84%] h-auto justify-start">
                    {products.map((product) => (<>
                        <Product key={product.id} tenSanPham={product.name} giaSanPham={product.price} />
                    </>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Products;