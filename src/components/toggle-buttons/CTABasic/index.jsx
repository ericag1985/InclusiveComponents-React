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
        <button aria-label={props.label} className="basic-cta" tabindex="0" aria-pressed={pressed} onClick={ctaPressed}>
            {props.label}
        </button>
    )
}