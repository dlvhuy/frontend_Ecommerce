import Input from "../../Components/common/input"
import Title from "../../Components/common/title"
import Button from "../../Components/common/button"
import Text from "../../Components/common/text"
import analyzeString from "../../Components/common/helpers/functions/analyzeString"
import isNumeric from "../../Components/common/helpers/functions/isNumeric"
import WarningText from "../../Components/common/waningText/waningText"
import useForm from "../../Components/common/hooks/useForm"
import isValidEmail from "../../Components/common/helpers/functions/isValidEmail"
import { useNavigate } from "react-router-dom"
import { authenRegister } from "../../axios/Services/AuthenService"
import { useDispatch } from "react-redux"
import { registerValidate } from "../../axios/Services/AuthenService/validate"

function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userName = "UserName"
    const email = "Email"
    const phoneNumber = "PhoneNumber"
    const password = "Password"
    const passwordConfirm = "PasswordConfirm"

    const gotoLogin =  () =>{ 
        navigate("/")
    }

    const {values,errors, handleChange, handleSubmit} = useForm(
        {Email:"",Password:"",PasswordConfirm:"",UserName:"",PhoneNumber:""},
        registerValidate
    );

    const onSubmit = () => {
        dispatch(authenRegister(values))
        console.log("Đăng ký thành công với:", values);
    };

    return (
        <div className="flex flex-col items-center gap-1 w-[400px] shadow-lg p-5  rounded-2 bg-white">
            <Title tilte={"Register"}></Title>
            <div className="flex flex-col gap-2">
                <Input label={"Tên tài khoản"} value={values.UserName} onChange={(e) => handleChange(e,userName)}></Input>
                    {errors.UserName && <WarningText content={errors.UserName}/>}
                <Input label={"Email"} value={values.Email} onChange={(e) => handleChange(e,email)}></Input>
                    {errors.Email && <WarningText content={errors.Email}/>}
                <Input label={"Số điện thoại"} value={values.PhoneNumber} onChange={(e) => handleChange(e,phoneNumber)}></Input>
                    {errors.PhoneNumber && <WarningText content={errors.PhoneNumber}/>}
                <Input label={"Mật khẩu"} value={values.Password} onChange={(e) => handleChange(e,password)}></Input>
                    {errors.Password && <WarningText content={errors.Password}/>}
                <Input label={"Nhập lại mật khẩu"} value={values.PasswordConfirm} onChange={(e) => handleChange(e,passwordConfirm)}></Input>
                    {errors.PasswordConfirm && <WarningText content={errors.PasswordConfirm}/>}

            </div>
            <div className="flex flex-col gap-1">
                <Button label={"Register"} onClick={(e) => handleSubmit(e,onSubmit)}></Button>
                <div className="flex justify-between">
                    <Text title={"Quên mật khẩu"}></Text>
                    <Text onClick={gotoLogin} title={"Đã có tài khoản?"}></Text>
                </div>
            </div>
        </div>
    )
}
export default Register