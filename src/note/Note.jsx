import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NotesContext";

export default function Note({note}){
    const dispatch = useContext(NotesDispatchContext)
    const [isEditing, setIsEditing] = useState(false);
    let component;

    function handleChangeText(e){
        dispatch({
            ...note,
            type: "CHANGE_NOTE",
            text: e.target.value
        })
    }

    if (isEditing){
        component = (
            <div>
                <input value={note.text} onChange={handleChangeText}/>
                <button onClick={() => setIsEditing(false)}>Save</button>
            </div>
        )
    }else {
        component = (
            <div>
                {note.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>
        )
    }

    function handleChangeDone(e){
       dispatch({
        ...note,
        type: "CHANGE_NOTE",
        done: e.target.checked
       })
    }

    function handleDelete(){
        dispatch({
            type: "DELETE_NOTE",
            id: note.id
        })
    }

    return (
        <label>
            <input type="checkbox" checked={note.done} onChange={handleChangeDone}/>
            {component}
            <button onClick={handleDelete}>Delete</button>
        </label>
    )
}