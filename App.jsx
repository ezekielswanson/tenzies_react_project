import React from 'react'

import { v4 as uuidv4 } from 'uuid'; 





export default function App() {

    const [die, setDie] = React.useState(generateNewDye());



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
    const dyeElements = die.map(dye => {
        <Dye 
            key={dye.id}
            number={dye.number}
            onClick={() => freezeDye(dye.id)}
        />
    })


   function freezeDye(id) {
    setDie(prevDye => prevDye.map(dye => {
        if (dye.id === id) {
            return {...dye, isFrozen: !dye.isFrozen}
        } else {
            return dye
        }
    }))
}
  



    return (
        <div className="dye_container">
            {dyeElements}
        </div>
    )
    

}


