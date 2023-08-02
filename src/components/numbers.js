import React, { useState, useEffect } from "react";

const Numbers = () => {
    const [numbers, setNumbers] = useState(['one', 'two', 'three']);
    const [letters, setLetters] = useState(['a', 'b', 'c']);

    const addNumber = () => {
        setNumbers([...numbers, 'four'])
    }

    const addLetter = () => {
        setLetters([...letters, 'd'])
    }

    // 當只有空陣列的時候，就相當於只有 Mount的時候會被觸發
    // 而若有加入其他 useState的 state變數到陣列中時，當有state發生改變就會被觸發
    useEffect( () => {
        console.log("triggered");
    }, [numbers, letters])

    return (
        <div>
            <h1>Numbers</h1>
            {numbers.map((num, index) => {
                return <h4 key={index}>{num}</h4>
            })}
            <button onClick={addNumber}>Add a number</button>
            {letters.map((letter, index) => {
                return <h4 key={index}>{letter}</h4>
            })}
            <button onClick={addLetter}>Add a letter</button>
        </div>
    )
}

export default Numbers