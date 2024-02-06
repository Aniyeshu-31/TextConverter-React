import React, { useState } from 'react'
export default function TextForm(props) {
    const [text,setText]= useState('');
     const handleRemoveExtraSpaces=()=>{
      let newText = text.split(/[ ]+/);
      // let newText = text.replace(/\s+/g," ").trim(); // Another Way to do this 
      setText(newText.join(" "));
     }
     const handleUpClick = ()=>{
       console.log('handleUpClick was clicked');
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlertMessage("Your text is Converted to UpperCase","success");
     }
     const removePunctuation= ()=>{

      let newText = text.replace(/\p{P}/gu,"");
      setText(newText);
      props.showAlertMessage("Punctuations has been removed","success");
     }
     const handlelowClick = ()=>{
       console.log('handlelowClick was clicked');
       let newText = text.toLowerCase();
       setText(newText);
       props.showAlertMessage("Your text is Converted to LowerCase","success");
     }
     const handleClearClick = ()=>{
       console.log('handleClearClick was clicked');
       let newText = '';
       setText(newText);
       props.showAlertMessage("Your text is Cleared Now","success");
     }
     const handleAlternateCaseClick = ()=>{
       console.log('handleClearClick was clicked');
       let newText='';
       for(let i=0;i<text.length;i++){
         if(i%2===0 && text.charAt(i)!==""){
             newText+=text.charAt(i).toUpperCase();
         }
         else if(text.charAt(i)!=="" && i%2!==0){
          newText+=text.charAt(i).toLowerCase();
         }
       }
       setText(newText);
       props.showAlertMessage("Your text is now in Alternate Case","success");
     }
     const handleOnChange = (event)=>{
        console.log('On change called');
        setText(event.target.value)
     }
      // text = "seunsf" // Wrong way to update the state
    const newLength = (text==="")?0:text.split(/\s+/g).filter((element)=>{return element.length!==0}).length;    // filter() is a higher order array method
    const handleCopy=()=>{
      let text=document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlertMessage("Copied to Clipboard!","success");
    }
  return (
    <>
    <div style={{marginTop:'10px'}}>
        <h1 style={{color:props.mode==='dark'?'white':'black',fontFamily:'serif',fontSize:'30px'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} style={{
          backgroundColor: props.mode==='dark'?'#192b8a':'white',
          color:props.mode==='dark'?'white':'black'
        }}></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-success' style={{cursor:'pointer'}} onClick={handleUpClick}>convertToUpperCase</button>
        <button disabled={text.length===0} className='btn btn-success mx-1 my-1' style={{cursor:'pointer'}} onClick={handlelowClick}>convertToLowerCase</button>
        <button disabled={text.length===0} className='btn btn-success mx-1 my-1' style={{cursor:'pointer'}} onClick={handleClearClick}>ClearText</button>
        <button disabled={text.length===0} className='btn btn-success mx-1 my-1' style={{cursor:'pointer'}} onClick={handleAlternateCaseClick}>ConvertToAlternateCase</button>
        <button disabled={text.length===0} className='btn btn-success mx-1 my-1' style={{cursor:'pointer'}} onClick={handleCopy}>CopyText</button>
        <button disabled={text.length===0} className='btn btn-success mx-1 my-1' style={{cursor:'pointer'}} onClick={handleRemoveExtraSpaces}>RemoveExtraSpaces</button>
        <button disabled={text.length===0} className='btn btn-success mx-1 my-1' style={{cursor:'pointer'}} onClick={removePunctuation}>RemovePunctuation</button>
    </div>
    <div className='container my-4' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 style={{fontFamily:'serif'}}>Your Text Summary</h1>
        <p style={{fontFamily:'serif'}}>{newLength} words and {text.length} Characters</p>
        <p style={{fontFamily:'serif'}} >{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes will be required to read</p>
        <hr/>
        <h2 style={{fontFamily:'serif'}}>Preview</h2>
        <p style={{fontFamily:'serif'}}>{text.length>0?text:"Enter Something the TextBox to Preview it Here"}</p>
    </div>
    </>
)
}
