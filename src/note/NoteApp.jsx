import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./Notelist";
import { NotesContext, NotesDispatchContext } from "./NotesContext";
// import { useReducer } from "react";
// import { useImmer } from "use-immer";

let id = 0;
const initialNotes = [
    {id: id++, text: "Learn HTML", done: true},
    {id: id++, text: "Learn CSS", done: true},
    {id: id++, text: "Learn JavaScripts", done: false},
    {id: id++, text: "Learn Laravel", done: true},
    {id: id++, text: "Learn React", done: false}
];

//====menggunakan reducer==========
// function notesReducer(notes, action){
//     switch (action.type){
//         case "ADD_NOTE" :
//             return [
//                 ...notes,
//                 {
//                     id: id++,
//                     text: action.text,
//                     done: false
//                 }
//             ];
//         case "CHANGE_NOTE" :
//             return notes.map(note => 
//                 note.id === action.id ? {...note, text: action.text, done: action.done} : note
//             )
//         case "DELETE_NOTE" :
//             return notes.filter(note => 
//                 note.id !== action.id
//             );
//         default:
//             return notes;
//     }
// }

// export default function NoteApp(){
//     const [notes, dispatch] = useReducer(notesReducer, initialNotes)

//     function handleAddNote(text){
//         dispatch({
//             type: "ADD_NOTE",
//             text: text
//         })
//     }

//     function handleChangeNote(note){
//         dispatch({
//             type: "CHANGE_NOTE",
//             id: note.id,
//             text: note.text,
//             done: note.done
//         })
//     }

//     function handleDeleteNote(note){
//         dispatch({
//             type: "DELETE_NOTE",
//             id: note.id
//         })
//     }

//     return(
//         <div>
//             <h1>Note App</h1>
//             <NoteForm onAddNote={handleAddNote}/>
//             <NoteList   notes={notes}
//                         onChange={handleChangeNote}
//                         onDelete={handleDeleteNote}/>
//         </div>
//     )


// }

//====================tidak pake reducer=========================//
// export default function NoteApp(){
//     const [notes, setNotes] = useImmer(initialNotes);

//     function handleAddNote(text){
//         setNotes(draft => {
//             draft.push({
//                 id: id++,
//                 text: text,
//                 done: false
//             });
//         });
//     }

//     function handleChangeNote(note){
//         setNotes(draft => {
//             const index = draft.findIndex(item => 
//                 item.id === note.id);
//             draft[index] = note;
//         })
//     }

//     function handleDeleteNote(note){
//         setNotes(draft => {
//             const index = draft.findIndex (item =>
//                 item.id === note.id
//             );
//             draft.splice(index, 1);
//         });
//     }

//     return(
//         <div>
//             <h1>Note App</h1>
//             <NoteForm onAddNote={handleAddNote}/>
//             <NoteList   notes={notes}
//                         onChange={handleChangeNote}
//                         onDelete={handleDeleteNote}/>
//         </div>
//     )
// }   


//=============Menggunakan reducer di Immer=================//
function notesReducer(notes, action){
    if(action.type === "ADD_NOTE"){
        notes.push({
                id: id++,
                text: action.text,
                done: false
        })
    }else if(action.type === "CHANGE_NOTE"){
        const index = notes.findIndex(note => note.id === action.id);
        notes[index].text = action.text;
        notes[index].done = action.done;

    }else if(action.type === "DELETE_NOTE"){
        const index = notes.findIndex(note => note.id === action.id);
        notes.splice(index, 1);
    }
}

export default function NoteApp(){
    const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes)

    // function handleAddNote(text){
    //     dispatch({
    //         type: "ADD_NOTE",
    //         text: text
    //     })
    // }

    // function handleChangeNote(note){
    //     dispatch({
    //         type: "CHANGE_NOTE",
    //         id: note.id,
    //         text: note.text,
    //         done: note.done
    //     })
    // }

    // function handleDeleteNote(note){
    //     dispatch({
    //         type: "DELETE_NOTE",
    //         id: note.id
    //     })
    // } gakk dipake lagi karena sudah ada Context

    return(
        <div>
            <NotesContext.Provider value={notes}>
                <NotesDispatchContext.Provider value={dispatch}>
                    <h1>Note App</h1>
                    <NoteForm/>
                    <NoteList/>
                </NotesDispatchContext.Provider>
            </NotesContext.Provider>
        </div>
    )
}