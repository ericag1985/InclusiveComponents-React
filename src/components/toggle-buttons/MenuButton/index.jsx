import React from "react";

// button clicked will display a menu
export const MenuButton = (props) =>{
    return(
        <>
            <li role="button" className="menu-button" id="menubutton"
            aria-expanded="false"
            aria-haspopup="true"
            aria-controls="menu"
            >
                <span tabIndex="0" className="menu-button__label">{props.label}</span>
                <ul className="sub-menu"id="menu" aria-labelledby="menubutton">
                    <li tabIndex="1" className="sub-menu__item"><a className="sub-menu__item-link" href="...">This is option 1.</a></li>
                    <li tabIndex="2" className="sub-menu__item"><a className="sub-menu__item-link" href="...">This is option 2.</a></li>
                    <li tabIndex="3" className="sub-menu__item"><a className="sub-menu__item-link" href="...">This is option 3.</a></li>
                    <li tabIndex="4" className="sub-menu__item"><a className="sub-menu__item-link" href="...">This is option 4.</a></li>
                </ul>
            </li>
            <div>
                
            </div>
        </>
    )
}