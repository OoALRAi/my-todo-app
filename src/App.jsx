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

    todo_lists:
        [...Array(60)].map((e, i) => ({
            text: `list ${i}`,
            todos: [...Array(20)].map((todo, i) => ({
                text: `the is my todo number ${i}`,
                isDone: false
            }))
        }))
    ,
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
