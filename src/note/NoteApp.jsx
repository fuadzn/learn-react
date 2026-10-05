import { useImmer, useImmerReducer } from "use-immer"
import NoteForm from "./noteForm"
import NoteList from "./NoteList"


let id = 0
const initialNotes = [
    { id: id++, text: "Learn HTML", done: false },
    { id: id++, text: "Learn CSS", done: true },
    { id: id++, text: "Learn JavaScript", done: false },
    { id: id++, text: "Learn ReactJS", done: false },
]

// function notesReducer(notes, action) {
//     switch (action.type) {
//         case "ADD_NOTE":
//             return [...notes, {
//                 id: id++,
//                 text: text,
//                 done: false
//             }]
//         case "CHANGE_NOTE":
//             return notes.map(n =>
//                 n.id === action.id ? { ...n, text: action.text, done: action.done } : n
//             )

//         case "DELETE_NOTE":
//             return notes.filter(n => n.id !== action.id)

//         default:
//             return notes
//     }
// }

// Use Immer Reducer
function notesReducer(draft, action) {
    if (action.type == "ADD_NOTE") {
        draft.push({
            id: id++,
            text: action.text,
            done: false
        })
    } else if (action.type == "CHANGE_NOTE") {
        const index = draft.findIndex(note => note.id === action.id);
        draft[index].text = action.text;
        draft[index].done = action.done;
    } else if (action.type == "DELETE_NOTE") {
        const index = draft.findIndex(note => note.id === action.id)
        draft.splice(index, 1);
    }
}

export default function NoteApp() {
    const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes)

    function handleAddNote(text) {
        dispatch({
            type: "ADD_NOTE",
            id: id++,
            text: text
        })
    }

    function handleChangeNote(note) {
        dispatch({
            type: "CHANGE_NOTE",
            id: note.id,
            text: note.text,
            done: note.done
        })
    }

    function handleDeleteNote(note) {
        dispatch({
            type: "DELETE_NOTE",
            id: note.id
        })
    }

    return (
        <div>
            <h1>Note App</h1>
            <NoteForm onAddNote={handleAddNote} />
            <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote} />
        </div>
    )
}
