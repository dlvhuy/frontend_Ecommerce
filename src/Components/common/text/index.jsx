function Text({title,onClick}) {
    return (
        <p onClick={onClick} className="cursor-pointer text-mainColor text-base hover:text-mainColorDark">
            {title}
        </p>
    )
}
export default Text;