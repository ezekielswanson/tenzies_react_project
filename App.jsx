import React from 'react'
import { v4 as uuidv4 } from 'uuid'; 
import Dye from './Die';

export default function App() {

    const [die, setDie] = React.useState(generateNewDye());



    //create structure of the object/element
    function generateNewDye() {
        const newDye = [];

        for (let i = 0; i < 10; i++) {
            const dye = {
                number:  Math.floor(Math.random() * 6) + 1,
                isFrozen: false,
                id: uuidv4()
         
             }

             newDye.push(dye);
             //console.log(newDye)
        }

        return newDye;
    }

   //Dye component
   //on component in app.jsx we're creatinng compnent and grabbing dye
   //props from the dye object
   //create the component with it's properties
    const dyeElements = die.map(dye => {
        return <Dye 
            key={dye.id}
            number={dye.number}
            isHeld ={dye.isFrozen}
            onClick={() => freezeDye(dye.id)}
        />
    })

    //Create functions to handle the logic

    //Handles frozen state on click
   function freezeDye(id) {
    setDie(prevDye => prevDye.map(dye => {
        if (dye.id === id) {
            return {...dye, isFrozen: !dye.isFrozen}
        } else {
            return dye
        }
    }))
}
  



//render dye elements pass props if needed.
    return (
        <div className="dye_container">
            {dyeElements}
        </div>
    )
    

}


