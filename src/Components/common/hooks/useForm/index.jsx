import { useEffect, useState } from "react";

function useForm(initialState,validate)
{
    const [values,setValues] = useState(initialState)
    const [errors,setErrors] = useState({})

    useEffect(() =>{
        
    },[values])

    useEffect(() =>{
    },[errors])

    const handleChange = (e,name) =>{
        var {value} = e.target
        if (name === "ImageProductSeller")
            var value = e.target.files[0]
        setValues({...values,[name]:value})

        console.log("tên field: ",name,", gia trị: ",value)
        if(validate){
            const error = validate(name,value);
            setErrors((prev) =>({...prev,[name]:error}))
        }


    }

    const handleSubmit = (e,callback) =>{
        e.preventDefault();
        
       
        console.log(errors)
        
        if(Object.values(errors).every(value => value === '')){
            callback()
        }
    }

    return { values, errors, handleChange, handleSubmit };
}

export default useForm