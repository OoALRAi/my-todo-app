import Checkbox from "./Checkbox";
import "./style.css"
export default function TodoItemUI({ item, id, onClick }) {
    return (
        <li className="todo-item" onClick={() => onClick(id)}>
            <p>{item.title}</p>
            <Checkbox state={item.isDone}></Checkbox>
        </li>
    );
}