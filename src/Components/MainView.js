import './mainview.css'
export default function MainView({ dispatch, todoList }) {
    return (
        <div className="mainview-container">
            <input className='todo-list-title' type='text' defaultValue={todoList.text}></input>
            <div>
                {todoList.todos.map((e) => <div> {e.text}</div>)}
            </div>
        </div >

    )
}