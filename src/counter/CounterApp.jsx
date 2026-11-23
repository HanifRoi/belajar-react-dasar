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
    // return (
    //     <div>
    //         {show2 ? <Counter name="Hanif"/> : <p>Reset State</p> }
    //         <input type="checkbox" checked={show2} onChange={handleChange} />Tampilkan Counter 2
    //     </div>
    // )//nama berubah, tapi counter tetap kalo render. jadi otomatis react akan mempertahankan state, kecuali posisi berubah atau component berbeda. 



    //merubah posisi component, karena awalnya div jadi section
    //state jadi tereset.
    // return (
    //     <div>
    //         {show2 ? (
    //             <div>
    //                 <Counter name="2"/>
    //             </div>
    //         ) : (
    //             <section>
    //                 <Counter name="1"/>
    //             </section>
    //         )
    //         }
    //         <input onChange={handleChange} type="checkbox" checked={show2}/>
    //     </div>
    // )

    

    //posisi komponen berbeda
    // return (
    //     <div>
    //         {!show2 && <Counter name="1"/>}
    //         {show2 && <Counter name="2"/>}
    //         <input onChange={handleChange} type="checkbox" checked={show2}/>
    //     </div>
    // )


    //Menggunakan Key
    return (
        <div>
            {show2 ? <Counter key="1" name="1"/> : <Counter key="2" name="2"/>}
            <input onChange={handleChange} type="checkbox" checked={show2}/>
        </div>
    )
}
