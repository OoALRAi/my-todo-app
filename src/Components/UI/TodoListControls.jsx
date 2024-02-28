import Checkbox from "./Checkbox";

export default function TodoListControls(
    {
        title = "title placeholder",
        onHideShowDoneTasks = () => { },
        onDeleteAll = () => { },
        hideDone = false,

    }
) {
    return (
        <div className="todo-list-controls">
            <div>{title}</div>
            <button onClick={onDeleteAll} className="NavBarButton">Delete All</button>
            <Checkbox onClick={onHideShowDoneTasks} state={hideDone} label={"Hide Done"}></Checkbox>
        </div>
    )

}