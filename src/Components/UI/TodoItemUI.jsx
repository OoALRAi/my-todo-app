import "./style.css"
export default function TodoItemUI({ item, id, onClick }) {
    return (
        <li className="todo-item" onClick={() => onClick(id)}>
            <p>{item.title}</p>
            <div className="checkbox">
                {item.isDone &&
                    <div className="checkbox-content"></div>
                }
            </div>
        </li>
    );
}