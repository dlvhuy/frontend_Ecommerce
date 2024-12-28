import { memo, useEffect, useState } from "react"
import { addProductValidate } from "../../../../axios/Services/AuthenService/validate"
import Button from "../../../common/button"
import useForm from "../../../common/hooks/useForm"
import Input from "../../../common/input"
import InputFile from "../../../common/input/inpuFile"
import InputArea from "../../../common/input/inputArea"
import TextProduct from "../../../common/text/textProduct"
import SelectFilterItem from "../../../filter/filterItem/selectFilterItem"
import { WarningText } from "../../../common/waningText"
import { useDispatch, useSelector } from "react-redux"
import { AddProduct } from "../../../../axios/Services/StoreService/StoreSlice"
import { GetCategorys } from "../../../../axios/Services/StoreService"

const ContentModalProduct = memo(() => {
    const {CategoryData} = useSelector((state) => state.store)
   
    const [preview, setPreview] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null)
    const [selectItem,setSelectedItem] = useState(0)
    

    useEffect(() =>{

    },[selectedFile,preview,selectItem])

    
    console.log("helloworld: ",CategoryData)

    const name = "Name"
    const imageProductSeller = "ImageProductSeller"
    const sellerPrice = "SellerPrice"
    const costPrice = "CostPrice"
    const category = "IdCategory"
    const quantity = "Quantity"
    const description = "Description"
    

    const { values, errors, handleChange, handleSubmit } = useForm(
        { Name: "", ImageProductSeller: null, SellerPrice: "", CostPrice: "", IdCategory: 0, Quantity: "", Description: "" },
        addProductValidate
    )

    console.log("khong hieu",selectItem)

    const handleChangeFile = (e) => {
        const file = e.target.files[0]
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            handleChange(e, imageProductSeller)
            setSelectedFile(file)
            setPreview(fileUrl);
        }
    }

    const handleSelectChange = (e) => {
        handleChange(e,category)
        setSelectedItem(e.target.value); 

    };
    const onSubmit = () => {
        // dispatch(AddProduct(values))
        console.log("kết quả: ", values)

    }

    return (<div className="flex mx-3 flex-col gap-3">
        <div className="flex flex-col gap-1"    >
            <TextProduct content={"Tên sản phẩm"} isBig={false} textColor="" />
            <Input label={"Nhập tên sản phẩm"} width="w-full" onChange={(e) => handleChange(e, name)} value={values.Name} />
            {errors.Name && <WarningText content={errors.Name} />}
        </div>
        <div className="flex flex-col gap-1">
            <TextProduct content={"Hình ảnh sản phẩm"} isBig={false} />
            <InputFile preview={preview} file={selectedFile} onChange={(e) => handleChangeFile(e)} />
            {errors.ImageProductSeller && <WarningText content={errors.ImageProductSeller} />}
           
        </div>
        <div >
            <div className="flex gap-3 justify-between">
                <div className="flex flex-col gap-1">
                    <TextProduct content={"Giá gốc sản phẩm"} isBig={false} textColor="" />
                    <Input label={"Nhập giá gốc"} width="w-0.8/2" value={values.CostPrice} onChange={(e) => handleChange(e, costPrice)} />
                    {errors.CostPrice && <WarningText content={errors.CostPrice} />}
                </div>
                <div className="flex flex-col gap-1">
                    <TextProduct content={"Giá bán sản phẩm"} isBig={false} textColor="" />
                    <Input label={"Nhập giá bán"} width="w-0.8/2" value={values.SellerPrice} onChange={(e) => handleChange(e, sellerPrice)} />
                    {errors.SellerPrice && <WarningText  content={errors.SellerPrice} />}
                </div>
            </div>
            <div className="flex gap-3 justify-between">
                <div className="flex flex-col gap-1">
                    <TextProduct content={"Hãng"} isBig={false} textColor="" />
                    <Input label={"Chọn hãng"} width="w-0.8/2" />

                </div>
                <div className="flex flex-col gap-1">
                    <TextProduct content={"Thể loại"} isBig={false} textColor="" />
                    <SelectFilterItem categories={CategoryData} onSelectChange={(e) => handleSelectChange(e)} value={values.IdCategory}/>
                    {errors.IdCategory && <WarningText content={errors.IdCategory} />}
                </div>
            </div>

            <div className="flex gap-3">
                <div className="flex flex-col gap-2" >
                    <TextProduct content={"Số lượng"} isBig={false} textColor="" />
                    <Input type="number" label={"Nhập số lượng"} width="w-0.8/2" onChange={(e) => handleChange(e, quantity)} value={values.Quantity} />
                    {errors.Quantity && <WarningText content={errors.Quantity} />}
                </div>
            </div>
            <div>
                <TextProduct content={"Mô tả"} isBig={false} textColor="" />
                <InputArea content={"Nhập mô tả"} cols={53} rows={5} value={values.Description} onChange={(e) => handleChange(e,description)}/>
            </div>
        </div>
        <div className="flex justify-center">
            <Button onClick={onSubmit} label={"Thêm sản phẩm"} style="w-[200px] h-[50px]" />
        </div>

    </div>)
})
export default ContentModalProduct