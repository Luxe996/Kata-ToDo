import { Component } from 'react'
import PropTypes from 'prop-types'

import TaskList from '../TaskList/TaskList'
import { Footer } from '../Footer/Footer'
import { NewTaskForm } from '../NewTaskForm/NewTaskForm'
import './App.css'

export class App extends Component {
  currentID = 1
  incrementID = () => {
    return this.currentID++
  }

  findIndexByID = (id) => {
    return this.state.initialState.findIndex((task) => task.id === id)
  }

  createTask = (task) => {
    return {
      id: this.incrementID(),
      description: task.description,
      isDone: false,
      isEditing: false,
      createdDate: new Date(),
      timer: {
        min: task.timer.min,
        sec: task.timer.sec,
      },
    }
  }

  addTask = (task) => {
    const newTask = this.createTask(task)
    this.setState((state) => {
      const newArray = [...state.initialState, newTask]
      return {
        initialState: newArray,
      }
    })
  }

  onChangeDescription = (description, id) => {
    this.setState(({ initialState }) => {
      const idx = this.findIndexByID(id)

      const modifiedTaskData = {
        ...initialState[idx],
        description,
      }
      const modifiedTasksData = [...initialState.slice(0, idx), modifiedTaskData, ...initialState.slice(idx + 1)]

      return {
        initialState: modifiedTasksData,
      }
    })
  }

  onFinishEditing = (id) => {
    this.setState(({ initialState }) => {
      const index = this.findIndexByID(id)

      const modifiedTaskData = {
        ...initialState[index],
        isEditing: false,
      }

      const modifiedTasksData = [...initialState.slice(0, index), modifiedTaskData, ...initialState.slice(index + 1)]

      return {
        initialState: modifiedTasksData,
      }
    })
  }

  deleteItem = (id) => {
    this.setState(({ initialState }) => {
      const idx = this.findIndexByID(id)
      const newArray = [...initialState.slice(0, idx), ...initialState.slice(idx + 1)]

      return {
        initialState: newArray,
      }
    })
  }

  editProperty = (property, id) => {
    this.setState(({ initialState }) => {
      const idx = this.findIndexByID(id)

      const modifiedTaskData = {
        ...initialState[idx],
        [property]: !initialState[idx][property],
      }
      const modifiedTasksData = [...initialState.slice(0, idx), modifiedTaskData, ...initialState.slice(idx + 1)]
      return {
        initialState: modifiedTasksData,
      }
    })
  }

  clearCompleted = () => {
    const active = this.state.initialState.filter((task) => !task.isDone)

    this.setState({
      initialState: active,
    })
  }

  countTaskActive = () => {
    return this.state.initialState.filter((task) => !task.isDone).length
  }

  handleFilterChange = (filter) => {
    this.setState({
      filter,
    })
  }

  state = {
    initialState: this.props.state.initialState.map((task) => {
      return this.createTask(task)
    }),
    filter: this.props.filter,
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm addTask={this.addTask} />
          </header>
          <section className="main">
            <TaskList
              tasks={this.state.initialState}
              filter={this.state.filter}
              onDeleted={this.deleteItem}
              onEditProperty={this.editProperty}
              onChangeDescription={this.onChangeDescription}
              onFinishEditing={this.onFinishEditing}
            />
            <Footer
              filter={this.state.filter}
              onFilterChange={this.handleFilterChange}
              taskCount={this.countTaskActive}
              clearCompleted={this.clearCompleted}
            />
          </section>
        </section>
      </div>
    )
  }
}

App.defaultProps = {
  initialState: [],
  filter: 'All',
}

App.propTypes = {
  initialState: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.oneOf(['All', 'Active', 'Completed']),
}
