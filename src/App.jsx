import { useState } from 'react';
import Screen from './Components/Screens';
import { Screens } from './Components/Screens';
import NavBar from './Components/UI/NavBar';
import "./App.css"
import Sidebar from './Components/UI/Sidebar/Sidebar';

function App() {
    const [currentScreen, setScreen] = useState(Screens.ListScreen)

    const onScreenChanged = (screen) => {
        console.log(screen)
        setScreen(oldScreen => screen)
    }


    return (
        <Sidebar></Sidebar>

        // <div className='todo-app'>
        //     <div className='todo-app-layout'>
        //         <NavBar onScreenChanged={onScreenChanged}></NavBar>
        //         <Screen currentScreen={currentScreen}></Screen>
        //     </div>
        // </div>
    )

}

export default App;
