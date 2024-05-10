import './sidebar.css'
import ListItem from './ListItem';
import { ReactComponent as AddButton } from "./add_icon.svg"
export default function Sidebar({ OnAddList, state, dispatch }) {

    return (
        <div className="sidebar">
            <div className='new-list-button-container'>
                {//<button className='new-list-button' onClick={OnAddList}>NEW LIST</button>
                }
                <AddButton className='new-list-button'></AddButton>
            </div>
            <div className='todo-lists-list'>
                {state &&
                    state.todo_lists.map(
                        (todoList, i) => <ListItem key={i} dispatch={dispatch} todoList={todoList}></ListItem>
                    )
                }
            </div>

        </div>
    )
}