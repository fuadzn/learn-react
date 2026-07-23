import Todo from "./Todo";

export default function TodoList(){
    const data = [
        {
            id: 1,
            text: 'Belajar React',
            isCompleted: true,
            isDeleted: true
        },
        {
            id: 2,
            text: 'Belajar Js',
            isCompleted: true,
            isDeleted: false
        },
        {
            id: 3,
            text: 'Belajar Python',
            isCompleted: true,
            isDeleted: false
        },
        {
            id: 4,
            text: 'Belajar Go',
            isCompleted: false,
            isDeleted: false
        }
    ]

    // const todos = data.map((todo) => <Todo key={todo.id} {...todo}/>)
    return (
        <ul>
            {/* {todos} */}
            {data.map((todo) => (
                <Todo key={todo.id} {...todo}/>
            ))}
        </ul>
    )
}