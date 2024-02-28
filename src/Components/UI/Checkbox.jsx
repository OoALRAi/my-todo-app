import "./style.css"
export default function Checkbox(
    {
        state,
        label = null,
        onClick = () => { }

    }
) {

    return (
        <div onClick={onClick} className="checkbox-container">
            <div className="checkbox">
                {state &&
                    <div className="checkbox-content"></div>
                }
                <div></div>
            </div>
            <div>{label}</div>
        </div>
    )
}