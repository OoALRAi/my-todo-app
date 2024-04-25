import { SidebarActions } from "../App";
export default function ListItem({
    dispatch,
    todoList,
}) {
    const selectItem = (e) => {
        e.preventDefault();
        dispatch({ type: SidebarActions.SELECT_LIST, data: todoList })
    }
    return (
        <div onClick={selectItem}>
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