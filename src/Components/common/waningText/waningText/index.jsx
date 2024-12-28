const WarningText =({content,style = "text-sm py-2"}) =>{
    return(
        <p className={`text-red ${style} w-auto`}>{content}</p>
    )
}

export default WarningText