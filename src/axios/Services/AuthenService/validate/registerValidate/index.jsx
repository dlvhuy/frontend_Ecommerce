import analyzeString from "../../../../../Components/common/helpers/functions/analyzeString";
import isNumeric from "../../../../../Components/common/helpers/functions/isNumeric";
import isValidEmail from "../../../../../Components/common/helpers/functions/isValidEmail";

const registerValidate =(name, value) => {
    let error = ""

    if (name === userName) {
        if (!value) {
            error = "Tên tài khoản không được để trống.";
        }
    }

    if (name === email) {
        if (!value) {
            error = "Email không được để trống.";
        } else if (!isValidEmail(value)) {
            error = "Email không hợp lệ.";
        }
    }

    if (name === phoneNumber) {
        if (!value) {
            error = "Số điện thoại không được để trống.";
        } else if ( !isNumeric(value)) {
            error = "Số điện thoại cần là số.";
        }
        else if ( value.length < 10 || value.length > 10) {
            error = "Số điện thoại cần đủ 10 chứ sỗ";
        }
    }

    if (name === password) {
        if (!value) {
            error = "Mật khẩu không được để trống.";
        } else if (!analyzeString(value).hasDigit ||
            !analyzeString(value).hasUpperCase ||
            !analyzeString(value).hasSpecialChars) {
            error = "Mật khẩu cần có: Ký tự số: 0-9, Chữ viết hoa, Ký tự đặc biệt.";
        }
    }

    if (name === passwordConfirm) {
        if (!value) {
            error = "Mật khẩu xác nhận không được để trống.";
        } else if (!analyzeString(value).hasDigit ||
            !analyzeString(value).hasUpperCase ||
            !analyzeString(value).hasSpecialChars) {
            error = "Mật khẩu cần có: Ký tự số: 0-9, Chữ viết hoa, Ký tự đặc biệt.";
        }
        else if(value.Password != value.PasswordConfirm){
            error = "Mật khẩu và mật khẩu xác nhận không khớp nhau.";
        }
    }

    return error
}

export default registerValidate