import React,{useState} from "react";

// button will toggle as an on/off switch
export const ToggleSwitch=(props)=>{
    const [check,setCheck] = useState(false);
    return(
        <div className="toggle-switch"> 
            <button role="switch" aria-checked={check}
                id="toggle" className="switch" tabIndex="0" onClick={()=>setCheck(!check)}>
                <span>off</span>
                <span>on</span>
            </button>
            <label htmlFor="toggle" className="switch">{props.label}</label>
        </div>
    )
    
}