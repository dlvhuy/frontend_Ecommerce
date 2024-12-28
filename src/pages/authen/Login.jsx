import Input from "../../Components/common/input"
import Title from "../../Components/common/title"
import Button from "../../Components/common/button"
import Text from "../../Components/common/text"
import isValidEmail from "../../Components/common/helpers/functions/isValidEmail"
import analyzeString from "../../Components/common/helpers/functions/analyzeString"
import useForm from "../../Components/common/hooks/useForm"
import WarningText from "../../Components/common/waningText/waningText"
import { useNavigate } from "react-router-dom"
import { authenLogin } from "../../axios/Services/AuthenService"
import { useDispatch, useSelector } from "react-redux"
import { loginValidate } from "../../axios/Services/AuthenService/validate"
import { ErrorText } from "../../Components/common/waningText"

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loading,error,message} = useSelector((state) => state.auth)

    const password = "Password"
    const email = "Email"
    
    const goToRegister = () => {
        navigate("/register");
    };  

    const {values,errors, handleChange, handleSubmit} = useForm(
        {Email:"",Password:""},
        loginValidate
    );

    const onSubmit = () => {
        dispatch(authenLogin(values,navigate))
        console.log("Đăng nhập thành công với:", values);
    };
    
    return (
        <div className="flex flex-col items-center gap-3 w-[400px] h-[auto] shadow-lg p-5 rounded-xl bg-white">
            <Title tilte={"Login"}></Title>
            <div className="flex flex-col gap-2">
                <Input type={"text"} label={"Email"} value={values.Email} onChange={(e) => handleChange(e,email)}></Input>
                {errors.Email && <WarningText content={errors.Email}/>}
                <Input type={"password"} label={"Mật khẩu"} value={values.Password} onChange={(e) => handleChange(e,password)}></Input>
                {errors.Password && <WarningText content={errors.Password}/>}
                
            </div>
            <div className="flex flex-col gap-2">
                <Button label={"Login"} onClick={() => onSubmit()}></Button>
                <div className="flex justify-between">
                    <Text title={"Quên mật khẩu"}></Text>
                    <Text onClick={goToRegister} title={"Chưa có tài khoản?"}></Text>
                </div>
            </div>
            {error && <ErrorText content={error}/>}
        </div>
    )
}
export default Login