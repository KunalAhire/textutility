import React, { useState } from "react";

const TextUtil = (props) => {
    const [text, setText] = useState("");
    
    const textUpdate = (event) => {
        setText(event.target.value);
    }
    const upCase = (text) =>{
        //text = text.split(' ');
        let count = 0;
        for(let i=0;i<text.length;i++){
            
            if(text[i] === " "|| text[i] ===""){
                count +=0;
            }
            else 
                count ++;
        }
        return count;
    }
    const UpperCase = () => {

        setText(text.toUpperCase());
        props.getAlert('Converted to Upper Case','success');
        

    }
    const LowerCase = () => {

        setText(text.toLowerCase());
        props.getAlert('Converted to Lower Case','success');

    }
    const clearText = () =>{
        if(text===''){
            props.getAlert('already Clear','warning');
        }
        else if(text !==''){
        setText("");
        props.getAlert('Text Cleared','success');
    }
    }
    const copyTeaxt = () =>{
        navigator.clipboard.writeText(text);
        props.getAlert('Copied','success');
    } 
    return (
        <>
            <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
                <div className="my-3">
                   <h1 >Text Utility</h1>
                    <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'} bg`} style={{backgroundColor:props.mode==='dark'?'#4d4c8e':'white'}} id="myBox" value={text} onChange={textUpdate} rows="5"></textarea>
                </div>
                <button disabled = {text.length === 0} type="submit" className="btn btn-primary mx-2 my-3" onClick={UpperCase} >Convert to Uppercase</button>
                <button disabled = {text.length === 0} type="submit" className="btn btn-primary mx-2 my-3" onClick={LowerCase} >Convert to LowerCase</button>
                <button disabled = {text.length === 0} type="submit" className="btn btn-primary mx-2 my-3" onClick={clearText} >Clear Text</button>
                <button disabled = {text.length === 0} type="submit" className="btn btn-primary mx-2 my-3" onClick={copyTeaxt} >Copy Text</button>
           </div>
            <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
                <h1 className="my-2">Your text summary</h1>
                <p>{upCase(text.split(/\s+/))} Words and {upCase(text)} character</p>
                <p>{upCase(text) * 0.008} Average time to read</p>
                <h2>Preview</h2>
                <p>{text.length >0 ? text:'Nothing to preview'}</p>
            </div>
            
        </>

    );
}
export default TextUtil;