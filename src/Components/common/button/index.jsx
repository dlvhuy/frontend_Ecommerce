function Button({label,onClick,style ="w-[300px] h-[50px] "}) {
    return (
        <button onClick={onClick} className={`${style} border-2 border-solid bg-mainColor text-textColor rounded-lg hover:bg-mainColorDark  transition duration-250`}>{label}</button>
    )
}
export default Button;