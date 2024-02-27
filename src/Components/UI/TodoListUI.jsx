import TodoItemUI from "./TodoItemUI";

export default function TodoListUI({ todoList = undefined, onItemClicked }) {

    return (

        <div className="todoListUI">
            {(todoList !== undefined && todoList.length !== 0) ?
                (<ul className="todoList">{
                    todoList.map((item, index) => <TodoItemUI key={index} id={index} item={item} onClick={onItemClicked}></TodoItemUI>)
                }
                </ul>)
                :
                <div className="todoListEmpty">tasks done</div>
            }
        </div>
    )
}