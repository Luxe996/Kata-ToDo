import TaskList from "../TaskList/TaskList";
import {Footer} from "../Footer/Footer";
import {NewTaskForm} from "../NewTaskForm/NewTaskForm";
import './App.css'

export const App = () => {
    return (
        <div>
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm/>
                </header>
                <section className="main">
                    <TaskList/>
                    <Footer/>
                </section>
            </section>
        </div>
    )
}