export const SidebarActions = {
    SELECT_LIST: 'select_list',
    DELECT_LIST: 'delete_list',
    ADD_LIST: 'add_list',
}
export const reducer = (state, { type, data }) => {
    switch (type) {
        case SidebarActions.SELECT_LIST:
            return { ...state, currentList: data }
        case SidebarActions.ADD_LIST:
            return {
                ...state,
                todo_lists: [

                    ...(state.todo_lists),
                    {
                        text: "",
                        todos: [],
                    }

                ]
            }
    }

    return state
}

export const initialState = {
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

