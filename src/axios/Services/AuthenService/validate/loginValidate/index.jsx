import analyzeString from "../../../../../Components/common/helpers/functions/analyzeString";
import isValidEmail from "../../../../../Components/common/helpers/functions/isValidEmail";

const loginValidate  = (name,value) =>{
    let error = ""
    
    if (name === "Email") {
        if (!value) {
            error = "Email không được để trống.";
        } else if (!isValidEmail(value)) {
            error = "Email không hợp lệ.";
        }
    }
    
    if (name === "Password") {
        if (!value) {
            error = "Mật khẩu không được để trống.";
        } else if (!analyzeString(value).hasDigit || 
        !analyzeString(value).hasUpperCase || 
        !analyzeString(value).hasSpecialChars) {
            error = "Mật khẩu cần có: Ký tự số: 0-9, Chữ viết hoa, Ký tự đặc biệt.";
        }
    }
    
    return error
}

export default loginValidate