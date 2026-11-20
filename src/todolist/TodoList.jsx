import Todo from "./Todo";

export default function TodoList(){
    //collection component
    const data = [
        {
            id: 0, //compoenent key
            text: "Belajar HTML",
            isCompleted: true
        },
        {
            id: 1,
            text: "Belajar CSS",
            isCompleted: true
        },
        {
            id: 2,
            text: "Belajar JavaScript",
            isCompleted: false
        },
        {
            id: 3,
            text: "Belajar Laravel",
            isCompleted: true
        },
        {
            id: 4,
            text: "Belajar React",
            isCompleted: false
        },
    ]

    return (
        <ul>
            {data.map((todo)=>(
                <Todo key={todo.id}{...todo}/>
            ))}
        </ul>
    )
}