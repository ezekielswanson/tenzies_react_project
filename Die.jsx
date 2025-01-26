


import React from "react"
export default function Dye(props) {
    return (
        
        <div className="dye--element"
            onClick={props.onClick} 
        >
            <span>{props.number}</span>
        </div>

    )

}



