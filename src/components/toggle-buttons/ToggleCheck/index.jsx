import React,{useState} from "react";

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