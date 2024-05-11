import { SidebarActions } from "./reducer";
import "./sidebar.css"
export default function ListItem({
    dispatch,
    todoList,
    isSelected = false,
}) {
    const selectItem = (e) => {
        e.preventDefault();
        dispatch({ type: SidebarActions.SELECT_LIST, data: todoList })
    }
    return (
        <div
            className={`list-item ${isSelected ? "selected" : ""}`}
            onClick={selectItem}>
            <div >
                {
                    todoList && (
                        todoList.text === "" ? 'Untitled' : todoList.text

                    )
                }
            </div>

        </div>
    )
}