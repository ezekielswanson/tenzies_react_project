
import React from 'react'

import { v4 as uuidv4 } from 'uuid';  // Add this at the top of your file





export default function App() {

    const [die, setDie] = React.useState({})
    const [frozen, setFrozen] = React.useState(false)





    //Dye object

    const dye = {
       number: randomNumber,
       isFrozen: false,
       id: uuidv4()

    }

    /*

       setIsGoingOut((prevState) => {
            return !prevState;
        });


    */

    setFrozen((prevState) => {
        return !prevState;
    }

    function freezeDye(id, isFrozen) {
        button.addEventListener("click", () => {
            return isFrozen === true;
        })
    }


//pass in the current dice
//

    function generateRandomNumber() {
        return Math.floor(Math.random() * 6) + 1 
    }


    const randomNumber = generateRandomNumber();



    console.log(randomNumber)


    const isFrozen = false
    isFrozen ? true : false;






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
        <main>
            <p>{randomNumber}</p>
        </main>
    )
    

}


