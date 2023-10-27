import PropTypes from 'prop-types'

import { Task } from './Task/Task'
import './TaskList.css'

const TaskList = ({ tasks, filter, onDeleted, onEditProperty, onChangeDescription, onFinishEditing }) => {
  const tasksData = tasks.map((task) => {
    if ((filter === 'Completed' && !task.isDone) || (filter === 'Active' && task.isDone)) {
      return null
    }

    const changeMode = task.isEditing ? (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onFinishEditing(task.id)
        }}
      >
        <input
          type="text"
          className="edit"
          value={task.description}
          onChange={(e) => onChangeDescription(e.target.value, task.id)}
        />
      </form>
    ) : null

    let classNames = ''
    if (task.isDone) {
      classNames += ' completed'
    }
    if (task.isEditing) {
      classNames += ' editing'
    }
    return (
      <li className={classNames} key={task.id}>
        <Task {...task} onDeleted={onDeleted} onEditProperty={onEditProperty} />
        {changeMode}
      </li>
    )
  })
  return <ul className="todo-list">{tasksData}</ul>
}

TaskList.defaultProps = {
  filter: 'All',
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.oneOf(['All', 'Active', 'Completed']),
  onDeleted: PropTypes.func.isRequired,
  onEditProperty: PropTypes.func.isRequired,
  onChangeDescription: PropTypes.func.isRequired,
  onFinishEditing: PropTypes.func.isRequired,
}

export default TaskList
