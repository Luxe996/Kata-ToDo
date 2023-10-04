import TaskList from "../TaskList/TaskList";
import {Footer} from "../Footer/Footer";
import {NewTaskForm} from "../NewTaskForm/NewTaskForm";
import {Component} from "react";
import './App.css'

export class App extends Component  {

    maxId = 100;
    state = {
        initialState : [{
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
        }]
    }
    deleteItem = (id) => {
        this.setState(({initialState}) => {
            const idx = initialState.findIndex((el) => el.id === id)
            const newArray = [...initialState.slice(0, idx), ...initialState.slice(idx+1)]

            return {
                initialState: newArray
            }
        })
    }

    editProperty = (property, id) => {
        this.setState(({initialState}) => {
            const idx = initialState.findIndex((el) => el.id === id)

            const modifiedTaskData = {
                ...initialState[idx],
                [property]: !initialState[idx][property]
            };
            const modifiedTasksData = [
                ...initialState.slice(0, idx),
                modifiedTaskData,
                ...initialState.slice(idx + 1)
            ];
            return {
                initialState: modifiedTasksData
            };
        })
    }

    addTask = (label) => {
        const newTask = {
            description: label,
            isDone:false,
            isEditing: false,
            id:this.maxId++
        }

        this.setState(({initialState}) => {
            const newArray = [
                ...initialState, newTask
            ]
            return{
                initialState: newArray
            }
        })
    }
    render() {
        return (
            <div>
                <section className="todoapp">
                    <header className="header">
                        <h1>todos</h1>
                        <NewTaskForm/>
                    </header>
                    <section className="main">
                        <TaskList
                            toDos = {this.state.initialState}
                            onDeleted = { this.deleteItem}
                            onEditProperty = {this.editProperty}
                        />
                        <Footer/>
                    </section>
                </section>
            </div>
        )
    }


}