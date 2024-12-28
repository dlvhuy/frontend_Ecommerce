import { useDispatch } from "react-redux"
import Button from "./Components/common/button"
import Input from "./Components/common/input"
import InputImage from "./Components/common/input/inpuFile"



const Test = () =>{
    
    const dispatch = useDispatch()
    const handleSubmit = (data) =>{
        dispatch(Test(data))
    }
    
    return (<>
        <Button label={"test"} onClick={handleSubmit()}/>
        <InputImage />
    </>)
}
export default Test