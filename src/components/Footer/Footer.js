import { TasksFilter } from '../TasksFilter/TasksFilter'
import './Footer.css'

export const Footer = ({ active, handleFilterChange, clearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{active} items left</span>
      <TasksFilter handleFilterChange={handleFilterChange} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}
