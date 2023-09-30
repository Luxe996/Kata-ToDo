import {Task} from "../Task/Task";
import './TaskList.css'

const TaskList = () => {
    return (
        <ul className="todo-list">
            <li className="completed">
            <Task />
            </li>
        </ul>
    )
}

export default TaskList