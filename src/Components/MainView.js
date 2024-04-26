import TodoItem from './TodoItem'
import './mainview.css'
export default function MainView({ dispatch, todoList }) {
    return (
        todoList ? (

            <div className="mainview-container" >
                <h1 className='todo-list-title' contentEditable={true} key={todoList.text} >{todoList.text}</h1>
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