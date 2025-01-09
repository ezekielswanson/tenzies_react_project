
import React from 'react'

import { v4 as uuidv4 } from 'uuid';  // Add this at the top of your file





export default function App() {

    const [die, setDie] = React.useState(generateNewDye());


    /*
    function createDyeElements() {


    }

      // Create card elements
    const cardElements = cards.map(card => (
        <Card 
            key={card.id}
            value={card.value}
            isLocked={card.isLocked}
            handleClick={() => lockCard(card.id)}
        />
    ));
    */


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


    const dyeElements = die.map(dye => {
        //genreating the structuer of the dye (compnonent)
        <Dye 
            key={dye.id}
            number={dye.number}
            //insert isFrozen property here


        />
    })



    //pass in the current dice

    /*
    purpose create function that updates isFrozen on clikc
    input = id, and it's a list so find where it's at the list 
    ouput = changing isFrozen = true





    */

    function freezeDye(id) {
        setDie(prevDye => 

    }

    const isFrozen = false
    isFrozen ? true : false;

    //Dye object

    

    /*

       setIsGoingOut((prevState) => {
            return !prevState;
        });


    */


    /*

    setFrozen((prevState) => {
        return !prevState;
    }

    function freezeDye(id, isFrozen) {
        button.addEventListener("click", () => {
            return isFrozen === true;
        })
    }

    */


/






/*
input/out put
-do we need to pass data in?
    no

-function returning something?
    -yes
    -randomly generate number

-




*/

/*
    function rollDice() {
        
    }

*/
    /*

       const [die, setDie] = React.useState({
        number: "",
        isFronze: false
    })



    */






    return (
        <div className="dye_container">
            <Dye number={}/>


        </div>
    )
    

}


