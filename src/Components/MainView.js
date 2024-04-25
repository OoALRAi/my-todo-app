import './mainview.css'
export default function MainView({ dispatch, todoList }) {
    return (
        todoList ? (

            <div className="mainview-container" >
                <input className='todo-list-title' type='text' key={todoList.text} defaultValue={todoList.text}></input>
                <div className='todo-list-items-container'>
                    {todoList.todos.map((e, i) => <div key={i}> {e.text}</div>)}
                </div>
            </div >
        ) : (<div className='no-list-selected-container'>
            <div className='no-list-selected-message'>no list is selected!</div>
        </div>)

    )
}