import PropTypes from 'prop-types'

import { TasksFilter } from '../TasksFilter/TasksFilter'
import './Footer.css'

export const Footer = ({ taskCount, clearCompleted, onFilterChange }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{taskCount()} items left</span>
      <TasksFilter onFilterChange={onFilterChange} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.propTypes = {
  filter: PropTypes.oneOf(['All', 'Active', 'Completed']),
  onFilterChange: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  taskCount: PropTypes.func.isRequired,
}
