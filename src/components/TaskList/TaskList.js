import {Task} from './Task/Task'
import './TaskList.css'

const TaskList = ({toDos}) => {
    const elements = toDos.map((item) => {

        const {id, ...itemProps} = item
        return (
            <li className="completed" key={id}>
                <Task {...itemProps} />
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