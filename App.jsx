import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'; 
import Dye from './Die';

export default function App() {

    const [die, setDie] = React.useState(generateNewDye());
    const [gameWinner, setGameWinner] = React.useState(false);
    


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
            isFrozen={dye.isFrozen}
            onClick={() => freezeDye(dye.id)}
        />
    })



    function rollNewDice() {
        setDie(prevDye => prevDye.map(dye => {
            if (dye.isFrozen === true) {
                return {
                    ...dye
                }
            } else {
                return {
                    ...dye,
                    number: Math.floor(Math.random() * 6) + 1
                }
            }
        }))
    }
    




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
What's the purpose of the function?
    -check if all state values are = if it it the game is won
What's the input?
    -die (state)
    -isFrozen state/condition "is it frozen"
What's the output?
    -display game won

Process

-write out the steps one by one


Questions 
    -Do I pass in the entire dye element to get access to all fo the props
    or, pass in each individually prop?


*/


/*

    -what's involvied in the game won?

    -all numbers in dye are the same

    data?
    -each dye 
    -dye number
    -are they all the same?
    -is it frozen?

    function that checks if all dye are equal
    if they are game is won



    */


    /*


    What's the purpose of the function?
        -determine game winner by 
          checkibg if all dye are equal
    What's the input?
        -dye (the dye is held in the array so pass in the array)
        -access it's number
    What's the output?
        -all dye frozen
        -pop in that says Game Winner!


    Process? 
    -pass in dye array
    -loop through each dye element in the dye array, and access it's number value
        -what type of for loop is needed?
        -I need access to all each index (?) and it's number
        -How do I check if all the dye's numbers are equal?

    -Questions
        - my assumption is since I already have a dye state 
        stucture, and compponent created, I'm passing in dye as paramter
        -when does the function need to be invoked?

        -user rolls dice
        -click to freeze all dice until the same #
        -one all dye are the same, game's won

    */


    


    
    //Game winner function
    const wonGame = die.every(dye =>
        //access the dye number and compare to the 
        //dye number of the first dye object in the the array

        dye.number === die[0].number && dye.isFrozen


        //return a value set by default

    )


    //Hide die

    /*
    purpose
        -hide the p text when game is won
    data/input
      -game state is the game won - true
    ouput   
        -hidden p texst
    questions
        -
    process

    */


    function hideAdditionalTitleText() {
        
    }




    React.useEffect(() => {
        if (wonGame) {
            setGameWinner(true);
        }
    }, [die]);




    


//render dye elements pass props if needed.
    return (
        <main>
            <h1>Tenzies</h1>
            {gameWinner && <h2>You won!</h2>}
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {dyeElements}
            </div>
            <button className="roll-button" onClick={rollNewDice}>Roll</button>
        </main>
    )
    

}



