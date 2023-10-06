import {TasksFilter} from "../TasksFilter/TasksFilter";
import './Footer.css'

export const Footer = ({taskCount}) => {
    return (
        <footer className="footer">
            <span className="todo-count">{taskCount()} items left</span>
            <TasksFilter/>
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}