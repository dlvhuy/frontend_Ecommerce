const ErrorText =({content}) =>{
    return(
        <div className=" flex justify-center items-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4 w-[300px]">
            <strong className="font-bold">Lỗi: </strong>
            <span className="block sm:inline"> {    content}</span>
        </div>
    )
}

export default ErrorText