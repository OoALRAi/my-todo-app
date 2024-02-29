import { useEffect, useState } from "react"
import TodoListUI from "./UI/TodoListUI"
import AddItemForm from "./UI/AddItemForm"
import Settings from "./UI/Settings"
import StatsBar from "./UI/StatsBar"
import TodoListControls from "./UI/TodoListControls"


export const Screens = {
    ListScreen: "List Screen",
    SettingsScreen: "Settings Screen"
}


export default function Screen({ currentScreen }) {
    const [todoList, setTodoList] = useState([
    ])

    const [hideDone, setHideDone] = useState(false)

    const onItemClicked = (item) => {
        setTodoList(old => {
            item.isDone = !item.isDone
            const newList = [...old]
            saveTodos(todoList)
            return newList
        })
    }

    const onItemAdded = (title) => {
        if (title) {
            const newList = [...todoList, { title: title, isDone: false }]
            saveTodos(newList)
            setTodoList(_ => newList)
        }
    }

    const onDeleteAll = () => {
        setTodoList(_ => [])
        saveTodos([])
    }
    const onHideShowDoneTasks = () => {
        setHideDone(old => !old)
    }


    useEffect(() => {
        setTodoList(_ => loadTodos())
    }, [])

    if (currentScreen === Screens.ListScreen) {
        return (<>
            <TodoListControls
                title={"Monday List"}
                onHideShowDoneTasks={onHideShowDoneTasks}
                onDeleteAll={onDeleteAll}
                hideDone={hideDone}
            ></TodoListControls>
            <TodoListUI
                todoList={
                    !hideDone ? todoList :
                        todoList.filter(item => !item.isDone)
                }
                onItemClicked={onItemClicked}></TodoListUI>
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


function saveTodos(todos) {
    localStorage.setItem("todoList", JSON.stringify(todos))
}

function loadTodos() {
    return JSON.parse(localStorage.getItem("todoList")) ?? []
}