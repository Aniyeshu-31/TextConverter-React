import React from "react";

export default function About(props) {
    // const[myStyle,setMyStyle]=useState({
    //     color: 'black',
    //     backgroundColor:'white',
    //     borderRadius:'8px'
    // })
    // const[btnText,setBtnText]=useState("EnableLightMode");
    // const ToggleStyle=()=>{
    //     if(myStyle.color==='white'){
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white',
    //             borderRadius:'8px'
    //         })
    //         setBtnText("EnableDarkMode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor:'black',
    //             border:'2px solid white',
    //             borderRadius:'8px'
    //         })
    //         setBtnText("EnableLightMode")
    //     }
    // }

    const myStyle = {
      color:props.mode==='dark'?'white':'#192b8a',
      backgroundColor: props.mode ==='dark'?'#192b8a':'white',
      border:'2px solid',
      borderColor: props.mode ==='dark'?'white':'#192b8a',
    }
    const textstyle={
      color:props.mode==='dark'?'white':'black'
    }
  return (
    <div className="container">
      <h1 className="my-3" style={textstyle}>About us</h1>
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
            <strong>
              Analyze your Text
              </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text Converter gives you a great way to analyze your text very efficiently. It also gives you facility to count the chaaracters and words that are present in your text.
            </div>
          </div>
        </div>
      </div>
      <div className="accordion" id="accordionExample">
      <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
               <strong>
              Free to use
              </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextConverter is a free Character counter tool that provides instant character count & word count statistics for a given text. TextConverter reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
      </div>
      <div className="accordion" id="accordionExample">
      <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
               <strong>
                Browser Compatible
              </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter or word analyzer software works very smoothly in any web browsers such as chrome, Firefox, Safari ,Opera and etc.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <button type="button" className="btn btn-primary my-3" onClick={ToggleStyle}>
          {btnText}
        </button> */}
      </div>
    </div>
  );
}
