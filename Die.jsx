//render child component for front end and pass properties from the component 
//strucutre from the parent app


import React from "react"
export default function Dye(props) {
    const styles = {
        backgroundColor: props.isFrozen ? "#59E391" : '#fff'
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



