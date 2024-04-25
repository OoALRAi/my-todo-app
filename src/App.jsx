import { useReducer } from "react";
import "./App.css"
import Sidebar from "./Components/Sidebar";
import MainView from "./Components/MainView";

const reducer = (state, action) => {
    return state
}

const SidebarActions = {
    SELECT_LIST: 'select_list',
    DELECT_LIST: 'delete_list',
    ADD_LIST: 'add_list',
}

const initialState = {
    todo_lists: [
        {
            text: 'monday',
            todos: [
                {
                    text: 'do your homework',
                    isDone: false
                }
            ]
        },
        {
            text: 'now or never',
            todos: [{
                text: 'go code then',
                isDone: true
            }]

        }
    ]

}

function App() {

    const [State, Dispatch] = useReducer(reducer, initialState)
    return (
        <div className="app-screen">
            <Sidebar state={State} dispatch={Dispatch}></Sidebar>
            <MainView todoList={State.todo_lists[0]}></MainView>
        </div>
    )

}

export default App;
