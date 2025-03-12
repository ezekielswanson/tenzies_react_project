import React from "react"
export default function Dye(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#fff"
    }
    
    return (
        <div 
            className="dye--element"
            onClick={props.onClick} 
            style={styles}
        >
            <span>{props.number}</span>
        </div>
    )
}



