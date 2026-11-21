// export default function Counter(){
//     let counter = 0; //local variable
//     function handleClick(){
//         counter++;
//         console.log(counter);
//     }
//     return(
//         <div>
//             <h1>-----------------------------------</h1>
//             <h1>Ini adalah contoh yang salah ya, nanti menggunakan State</h1>
//             <button onClick={handleClick}>Increment</button>
//             <h1>Counter: {counter}</h1>
//         </div>
//     )
// } contoh yang salah.


//contoh yang benar menggunakan state
import { useState } from "react";
export default function Counter(){
    let [counter, setCounter] = useState(0);
    function handleClick(){
        setCounter(counter + 1);
        // setCounter(counter + 1);
        // setCounter(counter + 1); gak bakal kehitung 3 kali, kalo mau langsung saja +3
        console.log(counter);
    }

    return(
        <div>
            <button onClick={handleClick}>Increment</button>
            <h1>Counter: {counter}</h1>
        </div>
    )
}