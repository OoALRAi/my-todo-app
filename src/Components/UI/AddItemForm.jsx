import { useEffect, useRef } from "react"

export default function AddItemUI({ onItemAdded }) {
    const textRef = useRef()
    const addButtonRef = useRef()
    const onAddedButtonClicked = () => {
        console.log("button clicked")
        const value = textRef.current.value
        textRef.current.value = ""
        onInputChanged()
        onItemAdded(value)
    }

    const onInputChanged = () => {
        const value = textRef.current.value
        addButtonRef.current.disabled = value.length === 0
    }

    useEffect(onInputChanged, [])

    return <div className="add-form">
        <input onChange={onInputChanged} placeholder="todo" className="add-input" ref={textRef} type="text"></input>
        <button ref={addButtonRef} className="NavBarButton" onClick={onAddedButtonClicked}>ADD</button>
    </div>

}