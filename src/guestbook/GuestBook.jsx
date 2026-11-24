import { useRef, useState } from "react";
import GuestBookForm from "./GuestBookForm";

export default function GuestBook(){
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const nameInput = useRef("");

    function handleClickSubmit(e){
        e.preventDefault();
        setName("");
        setMessage("");

        nameInput.current.focus(); //langsung ke input Name

        alert(`Name: ${name}, Message: ${message}`);
    }

    function handleChangeName(e){
        setName(e.target.value);
    }
    function handleChangeMessage(e){
        setMessage(e.target.value);
    }

    return(
        //yang berhasil, karena ref cuma bisa memanipulasi DOM
        // <div>
        //     <h1 style={{ textAlign: "center" }}>Guest Book</h1>
        //     <label htmlFor="name">Name</label>
        //     <br />
        //     <input type="text" ref={nameInput} onChange={handleChangeName} name="name" value={name} />
        //     <br />


        //     <label htmlFor="message">Message</label>
        //     <br />
        //     <textarea name="message" onChange={handleChangeMessage} value={message}></textarea>
        //     <br />
        //     <button onClick={handleClickSubmit} type="submit">Submit</button>
        // </div>

        //error karena Component tidak bisa dijalankan sebagai ref
        <div> 
            <h1 style={{ textAlign: "center" }}>Guest Book</h1>
            <GuestBookForm name={name} setName={setName} ref={nameInput}/>
            <label htmlFor="message">Message</label>
            <br />
            <textarea name="message" onChange={handleChangeMessage} value={message}></textarea>
            <br />
            <button onClick={handleClickSubmit} type="submit">Submit</button>
        </div>
        //supaya berhasil, tambakan props ref di Component GuestBookForm

    )
}