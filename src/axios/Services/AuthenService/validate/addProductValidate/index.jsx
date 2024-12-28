import { isValidFileSize, isValidFileType } from "../../../../../Components/common/helpers/functions/analyzeFile";
import isNumeric from "../../../../../Components/common/helpers/functions/isNumeric";

export const addProductValidate = (name, value) => {
    let error = ""
    
    if (name === name) {
        if (!value) {
            error = "Tên sản phẩm không được để trống.";
        } 
    }
    
    if (name === "ImageProductSeller") {
        if (!value) {
            error = "Bạn phải chọn một tệp.";
        } else if (!isValidFileType(value)) {
            error = "Định dạng tệp không hợp lệ. Chỉ chấp nhận: .jpg, .jpeg, .png.";
        } else if (!isValidFileSize(value)) {
            error = "Kích thước tệp vượt quá giới hạn cho phép (tối đa 5MB).";
        }
    }

    if (name === "SellerPrice") {
        if (!value) {
            error = "Giá bán không được để trống.";
        }
        else if ( !isNumeric(value)) {
            error = "Giá bán cần là số.";
        } 
    }

    if (name === "CostPrice") {
        if (!value) {
            error = "Giá gốc không được để trống.";
        }
        else if ( !isNumeric(value)) {
            error = "Giá gốc cần là số.";
        }
    }

    if (name === "Quantity") {
        if (!value) {
            error = "Số lượng sản phẩm không được để trống.";
        } else if ( !isNumeric(value)) {
            error = "Số lượng sản phẩm cần là số.";
        }
    }

    if (name === "Category") {
        if (!value) {
            error = "Thể loại không được để trống.";
        } 
    }


    
    return error
}

export default addProductValidate