import React,{useState} from "react";

export default function About(props) {
    const[myStyle,setMyStyle]=useState({
        color: 'black',
        backgroundColor:'white',
        borderRadius:'8px'
    })
    const[btnText,setBtnText]=useState("EnableLightMode");
    const ToggleStyle=()=>{
        if(myStyle.color==='white'){
            setMyStyle({
                color:'black',
                backgroundColor:'white',
                borderRadius:'8px'
            })
            setBtnText("EnableDarkMode")
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor:'black',
                border:'2px solid white',
                borderRadius:'8px'
            })
            setBtnText("EnableLightMode")
        }
    }
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About us</h1>
      <div className="accordion" id="accordionExample">
      <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              style={myStyle}
            >
             About-{props.title}
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>TextConverter is a convenient and intuitive app that allows instant conversion of text from one format to another.This Application will provide Various features that will help the users to convert their text according to their convenience</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button type="button" className="btn btn-primary my-3" onClick={ToggleStyle}>
          {btnText}
        </button>
      </div>
    </div>
  );
}
