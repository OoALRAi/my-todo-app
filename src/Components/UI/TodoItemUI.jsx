import Checkbox from "./Checkbox";
import "./style.css"
export default function TodoItemUI({ item, onClick }) {
    return (
        <li className="todo-item" onClick={() => onClick(item)}>
            <p>{item.title}</p>
            <Checkbox state={item.isDone}></Checkbox>
        </li>
    );
}