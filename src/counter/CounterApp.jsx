import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp(){
    const [show2, setShow2] = useState(true)

    function handleChange(e){
        setShow2(e.target.checked)
    }
    //jika component sama posisi beda
    // return (
    //     <div>
    //         <Counter name="Hanif"/>
    //         {show2 && <Counter name="Roihan"/>}
    //         <input type="checkbox" checked={show2} onChange={handleChange} />Tampilkan Counter 2
    //     </div>
    // )

    //jika component dan posisi sama
    return (
        <div>
            {show2 ? <Counter name="Hanif"/> : <Counter name="Roihan"/> }
            <input type="checkbox" checked={show2} onChange={handleChange} />Tampilkan Counter 2
        </div>
    )//nama berubah, tapi counter tetap kalo render. jadi otomatis react akan mempertahankan state, kecuali posisi berubah atau component berbeda. 
}