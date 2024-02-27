import { useMemo } from "react";
import "./style.css"
export default function StatsBar({ numTodos = 0, numDone = 0 }) {
    return (

        <div className="statsbar">
            <div className="statsbar-text">
                TODOS: {numTodos} | DONE: {numDone}
            </div>
        </div>

    );

}