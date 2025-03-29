import React from 'react'
import { v4 as uuidv4 } from 'uuid'; 
import Dye from './Die';

export default function App() {

    const [die, setDie] = React.useState(generateNewDye());
    cosnt [gameWinner, setGameWinner] = React.useState(false);



    /*

    -what's involvied in the game won?

    -all numbers in dye are the same

    data?
    -each dye 
    -dye number
    -are they all the same?






    */



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


/*
What’s the purpose of the function?
    -check if all state values are = if it it the game is won
What’s the input?
    -die (state)
    -isHeld state/condition "is it frozen"
What’s the output?
    -display game won

Process

-write out the steps one by one


Questions 
    -Do I pass in the entire dye element to get access to all fo the props
    or, pass in each individually prop?


*/



function gameWon(die) {

}
  



//render dye elements pass props if needed.
    return (
        <div className="dye_container">
            {dyeElements}
        </div>
    )
    

}


