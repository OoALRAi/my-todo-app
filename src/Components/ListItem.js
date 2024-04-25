export default function ListItem({
    onSelect = () => { },
    onDelete = () => { },
    state
}) {
    const onListClicked = (e) => {
        e.preventDefault();
        onSelect()
    }
    return (
        <div onClick={onListClicked}>
            <div>
                {state && state.text}
            </div>
            <div>[
                {state.todos.filter(e => e.isDone).length}{" "}|{" "}
                {state.todos.filter(e => !e.isDone).length}
                ]

            </div>

        </div>
    )
}