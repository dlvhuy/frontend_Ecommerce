

const InputArea = ({rows,cols,content,onChange}) =>{
    return(<textarea maxLength={(cols * rows) - 30} onChange={onChange} className="shadow-2xl p-4" rows={rows} cols={cols} placeholder={content}></textarea>)
}

export default InputArea