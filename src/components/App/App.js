import TaskList from "../TaskList/TaskList";
import {Footer} from "../Footer/Footer";
import {NewTaskForm} from "../NewTaskForm/NewTaskForm";
import './App.css'

export const App = () => {
    const initialState = [{
        description: "Completed task",
        isDone: true,
        isEditing: false,
        id: 1,
    }, {
        description: "Editing task",
        isDone: false,
        isEditing: true,
        id: 2,
    }, {
        description: "Active task",
        isDone: false,
        isEditing: false,
        id: 3,
    }];

    return (
        <div>
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm/>
                </header>
                <section className="main">
                    <TaskList toDos = {initialState}/>
                    <Footer/>
                </section>
            </section>
        </div>
    )
}