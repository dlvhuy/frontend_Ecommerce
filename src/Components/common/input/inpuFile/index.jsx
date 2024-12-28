import { useEffect, useState } from "react";
import TextProduct from "../../text/textProduct";
import { FaSellcast } from "react-icons/fa6";

const InputImage = ({onChange,preview,selectedFile}) => {


    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleClick = () => {
        document.getElementById("fileInput").click()
    }
    
    return (<div className="flex flex-col items-center">
        <div
            onDragOver={(e) => handleDragOver(e)}
            onClick={handleClick}
            className="w-full h-64 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 cursor-pointer">
            {preview && <img src={preview} alt="Preview" className="w-[250px] h-[250px] object-contain" />}
            {!preview && <p className="text-gray-500 px-3">Kéo thả tệp hoặc bấm để chọn tệp</p>}
        </div>
        <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={onChange}
            value={selectedFile}
            
           
        />
        {selectedFile && preview && <TextProduct isBig={false} content={selectedFile.name} />}

    </div>)

}
export default InputImage;