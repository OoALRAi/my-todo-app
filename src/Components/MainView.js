import { useRef } from 'react'
import TodoItem from './TodoItem'
import './mainview.css'
export default function MainView({ dispatch, todoList }) {

    const onTitleChanged = (event) => {
        console.log("hello world")

    }
    return (

        todoList ? (

            <div className="mainview-container" >
                <h1
                    onChange={onTitleChanged}
                    className='todo-list-title'
                    contentEditable={true}

                    key={todoList.text}
                >
                    {
                        todoList.text === "" ? "Untitled" : todoList.text
                    }
                </h1>
                <div className='todo-list-items-container'>
                    {todoList.todos.map(
                        (todo, i) =>
                            <TodoItem key={i} todo={todo}></TodoItem>
                    )}
                </div>
            </div >
        ) : (<div className='no-list-selected-container'>
            <div className='no-list-selected-message'>no list is selected!</div>
        </div>)

    )
}