import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NotesContext";

export default function NoteForm(){
    const [text, setText] = useState("");
    const dispatch = useContext(NotesDispatchContext);

    function handleChange(e){
        setText(e.target.value);
    }

    function handleClick(){
        dispatch({
            type: "ADD_NOTE",
            text: text
        });
        setText("");
    }

    return(
        <div>
            <input  placeholder="Add note" value={text} onChange={handleChange}/>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}