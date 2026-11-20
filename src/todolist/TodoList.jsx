import Todo from "./Todo";

export default function TodoList(){
    return (
        <ul>
            <Todo isCompleted={true} text="Belajar HTML"/>
            <Todo isCompleted={true} text="Belajar CSS"/>
            <Todo isCompleted={false} text="Belajar JavaScripts"/>
            <Todo isCompleted={true} text="Belajar Laravel"/>
            <Todo isCompleted={false} text="Belajar React"/>
            <Todo isDeleted={false} isCompleted={true} text="Belajar Inggris"/>
            <Todo isDeleted={false} isCompleted={false} text="Belajar Jepang"/>
            <Todo isDeleted isCompleted={false} text="Belajar China"/>
        </ul>
    )
}