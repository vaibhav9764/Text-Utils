import React, { useState } from 'react'

export default function TextForm(prop) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        prop.showAlert("Converted To lowerCase","success");
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        prop.showAlert("Converted To uperCase","success");
    }
    const handleClearClick = () => {
        let newText="";
        setText(newText);
        prop.showAlert("text cleared","success");
    }
    
    const handleOnChane = (event) => {

        setText(event.target.value);
    }
    const handleSpacesclick=(event)=>{
        let newText=text.replace(/\s+/g, ' ').trim();
        setText(newText);
        prop.showAlert("Removed spaces succefully","success");
    }
    return (
        <>
            <div className="mb-3 container" style={{color:prop.mode==="dark"?"white":"black"}}>
                <h3  >{prop.heading}</h3>
                <textarea className="form-control" style={{backgroundColor:prop.mode==="dark"?"#2c4178":"white",color:prop.mode==="dark"?"white":"black"}} value={text} onChange={handleOnChane} id="myBox" rows="5"></textarea>
                <button disabled={text.length==0} className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length==0}  className="btn btn-primary my-3 mx-3" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button  disabled={text.length==0} className="btn btn-primary my-3 mx-3" onClick={handleClearClick}>Clear</button>
                <button disabled={text.length==0}  className="btn btn-primary my-3 mx-3" onClick={handleSpacesclick}>Remove Extra Spaces</button>

            </div>
            <div className="container" style={{color:prop.mode==="dark"?"white":"black"}}>
                <h3>Text Summary</h3>
                <p> {text.split(" ").filter((element)=>{return element.length!=0}).length} word , {text.length} character  </p>
                <p>{text.split(" ").filter((element)=>{return element.length!=0}).length*0.008} minitue to read</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>

        </>
    )
}
