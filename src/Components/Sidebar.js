import './sidebar.css'
import ListItem from './ListItem';
export default function Sidebar({ OnAddList, state, dispatch }) {

    return (
        <div className="sidebar">
            <button onClick={OnAddList}>add list</button>
            <div className='todo-lists-list'>
                {state &&
                    state.todo_lists.map(e => <ListItem state={e}></ListItem>)
                }
            </div>

        </div>
    )
}