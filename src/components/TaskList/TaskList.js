import {Task} from './Task/Task'
import './TaskList.css'

const TaskList = ({toDos, onDeleted, onEditProperty}) => {

    const elements = toDos.map((item) => {
        let classNames = "";
        if (item.isDone) {
            classNames += " completed";
        }
        return (
            <li className={classNames} key={item.id}>
                <Task
                    {...item}
                    onDeleted = {onDeleted}
                    onEditProperty = {onEditProperty}
                />
            </li>
        )
    })
    return (
        <ul className="todo-list">
            {elements}
        </ul>
    )
}

export default TaskList