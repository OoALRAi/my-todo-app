import { Screens } from "../Screens"
import "./style.css"
export default function NavBar(
    {
        onScreenChanged = () => { }
    }
) {
    const onTodoListClicked = () => {
        onScreenChanged(Screens.ListScreen)
    }
    const onSettingsClicked = () => {
        onScreenChanged(Screens.SettingsScreen)
    }

    return <div className="NavBar">
        <div className="app-title">
            Todo App

        </div>
        <div className="horizontal-space"></div>

        <button className="NavBarButton" onClick={onTodoListClicked}>Todo List</button>
        <button className="NavBarButton" onClick={onSettingsClicked}>Settings</button>
    </div>
}