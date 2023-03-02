import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const [bold,setBold]= useState(false)
    const [italics, setItalics] = useState(false)

    const handleUppercaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowercaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        let newText = " ";
        setText(newText)
    }
    // const handleBoldClick =()=>{
    //     // if(bold===true){
    //     //     setBold(false)
    //     // }else{
    //     //     setBold(true)
    //     // }
    //     setBold(!bold)
    // }
    // const handleItalicsClick =()=>{
    //     // if(italics===true){
    //     //     setItalics(false)
    //     // }else{
    //     //     setItalics(true)
    //     // }
    //     setItalics(!italics)
    // }
    const handleOnChange = (event) => {
        console.log("Text was changed")
        setText(event.target.value)
    }
    
    return (
        <>
        <div className="my-5">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className={`form-control ${bold?'fw-bolder':'normal'} ${italics?'fst-italic':'normal'} `} id="myBox" value={text} placeholder='Enter your text here' rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUppercaseClick}>Convert to Upper case</button>
            <button className="btn btn-primary mx-2" onClick={handleLowercaseClick}>Convert to Lower case</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={()=>setBold(!bold)}>Convert text to Bold.</button>
            <button className="btn btn-primary mx-2" onClick={()=>setItalics(!italics)}>Convert text to Italics</button>
        </div>
        <div className="container" >
            <h1>Text Summary:</h1>
            <p>Your text contains {text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008*text.split(" ").length} Minutes read.</p>
            <h2>Preview:</h2>
            <p className={`${bold?'fw-bolder':'normal'} ${italics?'fst-italic':'normal'} `}>{text.length>0?text:"Enter text in the above box to preview it here!"}</p>
        </div>
        </>
    );
}
