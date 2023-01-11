import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
     const lower=word.toLowerCase();
     return lower.charAt(0).toUpperCase()+lower.substring(1,lower.length);
    }
  return (
        // Important Syntax to remember
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>
            {capitalize(props.alert.type)+" "}
            </strong>:<span>{" "}</span>{props.alert.msg}  
        </div>   
  )
}

export default Alert
