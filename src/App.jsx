import { useReducer } from "react";
import "./App.css"
import Sidebar from "./Components/Sidebar";
import MainView from "./Components/MainView";
import { reducer, initialState } from "./Components/reducer"


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
