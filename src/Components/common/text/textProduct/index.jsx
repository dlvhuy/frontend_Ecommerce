const TextProduct = ({content,isBig = true,textColor = ""}) =>{
    return (
        <div>
            <p className={`text-lg ${isBig ? "font-medium" : "font-normal"} pl-2 ${textColor}`}>{content}</p>
        </div>
    )
}

export default TextProduct;