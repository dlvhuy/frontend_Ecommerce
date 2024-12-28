
const ImageProduct = ({img = "https://happygentleman.com/wp-content/uploads/2019/11/80058-6-mens-shoes-black2.jpg",style = "w-[120px] h-[120px]"}) =>{
    return(
        <div className={`relative ${style} rounded-lg p-1 flex justify-center items-center`}>
            <img className="object-contain" src={img}/>
        </div>
    )
}
export default ImageProduct