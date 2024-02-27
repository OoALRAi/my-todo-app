import { useState } from "react"
import TodoListUI from "./UI/TodoListUI"
import TodoItem from "./Model/TodoItem"
import AddItemForm from "./UI/AddItemForm"
import Settings from "./UI/Settings"
import StatsBar from "./UI/StatsBar"


export const Screens = {
    ListScreen: "List Screen",
    SettingsScreen: "Settings Screen"
}


export default function Screen({ currentScreen }) {
    const [todoList, setTodoList] = useState([
    ])

    const onItemClicked = (index) => {
        const item = todoList[index]
        item.toggle()
        setTodoList(old => {
            return [...old]
        })
    }

    const onItemAdded = (title) => {
        if (title) {
            setTodoList(old => [...old, new TodoItem(title)])

        }

    }

    if (currentScreen === Screens.ListScreen) {
        return (<>
            <TodoListUI todoList={todoList} onItemClicked={onItemClicked}></TodoListUI>
            <StatsBar
                numTodos={
                    todoList.filter(item => !item.isDone).length
                }
                numDone={
                    todoList.filter(item => item.isDone).length
                }
            ></StatsBar>
            <AddItemForm onItemAdded={onItemAdded}></AddItemForm>
        </>
        )
    } else return (
        <Settings></Settings>
    )
}

