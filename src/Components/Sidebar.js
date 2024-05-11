import './sidebar.css'
import ListItem from './ListItem'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { SidebarActions } from './reducer';
export default function Sidebar({ state, dispatch }) {
    const onAddList = (event) => {
        event.preventDefault();
        dispatch({ type: SidebarActions.ADD_LIST })

    }

    return (
        <div className="sidebar">
            <div className='new-list-button-container'>
                {//<button className='new-list-button' onClick={OnAddList}>NEW LIST</button>
                }
                <IconButton onClick={onAddList}>
                    <AddIcon></AddIcon>
                </IconButton>
            </div>
            <div className='todo-lists-list'>
                {state &&
                    state.todo_lists.map(
                        (todoList, i) => (
                            <ListItem
                                key={i}
                                isSelected={todoList === state.currentList}
                                dispatch={dispatch}
                                todoList={todoList}
                            >
                            </ListItem>
                        )
                    )
                }
            </div>

        </div>
    )
}