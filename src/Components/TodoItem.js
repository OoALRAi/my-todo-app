import "./todoitem.css"
export default function TodoItem({ todo }) {
    return (
        <div contentEditable={true} className="todo-item">{todo.text}</div>
    )

}