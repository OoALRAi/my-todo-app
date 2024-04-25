import { useReducer } from "react";
import "./App.css"
import Sidebar from "./Components/Sidebar";
import MainView from "./Components/MainView";


export const SidebarActions = {
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
    ],
    currentList: null

}

const reducer = (state, { type, data }) => {
    switch (type) {
        case SidebarActions.SELECT_LIST:
            return { ...state, currentList: data }
    }

    return state
}

function App() {

    const [State, Dispatch] = useReducer(reducer, initialState)
    return (
        <div className="app-screen">
            <Sidebar state={State} dispatch={Dispatch}></Sidebar>
            <MainView todoList={State.currentList}></MainView>
        </div>
    )

}

export default App;
