import "./sidebar.css"
import ListItemUI from "./ListItemUI"
export default function Sidebar({ todoLists }) {

    return (
        <div className="sidebar">
            {
                todoLists !== undefined &&
                todoLists.map(item => { <ListItemUI listItem={item}></ListItemUI> })
            }
        </div>
    )
}