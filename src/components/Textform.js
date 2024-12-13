import React, {useState} from 'react';



export default function Textform(props) {
    const[text, setText] = useState("");
    const[para, setPara] = useState("");
    const handleUpClick = (() => {
        setText(text.toUpperCase())
        setPara(para.toUpperCase())
        props.showAlert("converted into uppercase", "success")
    });
    
    
    return (
       <>
        <div className='container my-4'>
            <h1>{props.heading}</h1>
            <div className="my-3"> 
                <input type="text" value={text} onChange={e => setText(e.target.value)}/>
                <textarea className="form-control" value={para}  onChange={e => setPara(e.target.value)} id="myBox" rows="8"></textarea>
                <button className='btn btn-primary my-3' onClick={handleUpClick}>Convert to Uppercase</button>
            </div>
        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <p>{para.split(" ").length-1} and {para.length} charaters</p>
            <h2>{0.08 * para.split(" ").length}</h2>
        </div>
       </>
    )
}
