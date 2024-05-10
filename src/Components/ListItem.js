import { SidebarActions } from "../App";
import "./sidebar.css"
export default function ListItem({
    dispatch,
    todoList,
}) {
    const selectItem = (e) => {
        e.preventDefault();
        dispatch({ type: SidebarActions.SELECT_LIST, data: todoList })
    }
    return (
        <div className="list-item" onClick={selectItem}>
            <div>
                {todoList && todoList.text}
            </div>
            <div>[
                {todoList.todos.filter(e => e.isDone).length}{" "}|{" "}
                {todoList.todos.filter(e => !e.isDone).length}
                ]

            </div>

        </div>
    )
}