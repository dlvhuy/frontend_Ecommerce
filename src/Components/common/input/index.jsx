function Input({label,value,onChange,type,width = "w-[300px]",height = "h-[50px]"})
{
    return(
       <input placeholder={label} type={type} value={value} onChange={onChange} className={`pl-4 ${width} ${height} m-1 rounded-sm shadow-md`}></input>
    )
}

export default Input;