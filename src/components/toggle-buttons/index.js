import React,{useState}from "react";

export function RadioButtons(props){
    return (
        <fieldset className="radiobuttons">
            <legend>{props.title}</legend>
                <input type="radio" id="notify-on" name="notify" value="on" checked></input>
                <label for="notify-on">{props.onLabel}</label>
                <input type="radio" id="notify-off" name="notify" value="on"></input>
                <label for="notify-off">{props.offLabel}</label>
        </fieldset>
    )
}

export function ToggleCheck(props){
    const [check, setCheck] = useState(false);
    return(
        <label>{props.label}
            <input type="checkbox" onClick={()=>setCheck(!check)}id="chk1-label"></input>
            <span role="checkbox" aria-checked={check} tabIndex="0" aria-labelledby="chk1-label"></span>
        </label>
    )
}

export function ToggleSwitch(props){

    const [check,setCheck] = useState(false);

    return(
        <div className="toggle-switch"> 
            <button role="switch" aria-checked={check}
                id="toggle" className="switch" tabIndex="0" onClick={()=>setCheck(!check)}>
                <span>off</span>
                <span>on</span>
            </button>
            <label htmlFor="toggle" className="switch">Toggle Switch</label>
        </div>
    )
    
}
