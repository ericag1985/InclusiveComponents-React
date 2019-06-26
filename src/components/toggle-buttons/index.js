import React,{useState}from "react";

// basic button 
export const CTABasic = (props) =>{
    const [count,setCount] = useState(1);
    const [pressed,setPressed] = useState(false);

    const ctaPressed = (press)=>{
        setPressed(!pressed)
        setCount(count+1)
        console.log(`You clicked this button ${count} times`)
    }

    return(
        <button className="basic-cta" tabindex="0" aria-pressed={pressed} onClick={ctaPressed}>
            {props.label}
        </button>
    )
}


// radio buttons
export const RadioButtons=(props)=>{
    return (
        // add aria-pressed
        <fieldset className="radiobuttons">
            <legend>{props.title}</legend>
                <input type="radio" id="notify-on" name="notify" value="on" checked></input>
                <label for="notify-on">{props.onLabel}</label>
                <input type="radio" id="notify-off" name="notify" value="on"></input>
                <label for="notify-off">{props.offLabel}</label>
        </fieldset>
    )
}

// toggle checkbox checked/unchecked
export const ToggleCheck=(props)=>{
    const [check, setCheck] = useState(false);
    return(
        <label>{props.label}
            <input type="checkbox" onClick={()=>setCheck(!check)}id="chk1-label"></input>
            <span role="checkbox" aria-checked={check} tabIndex="0" aria-labelledby="chk1-label"></span>
        </label>
    )
}

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

// button clicked will display a menu
export const MenuButton = (props) =>{
    return(
        <>
            <button id="menubutton"
            aria-haspopup="true"
            aria-controls="menu">
                {props.label}
            </button>
            <ul id="menu" aria-labeledby="menubutton"></ul>
        </>
    )
}