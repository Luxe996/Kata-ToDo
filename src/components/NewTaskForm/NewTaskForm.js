import { Component } from 'react'
import PropTypes from 'prop-types'
import './NewTaskForm.css'

export class NewTaskForm extends Component {
  state = {
    description: '',
    min: 0,
    sec: 0,
  }

  onInputChange = (e) => {
    this.setState({
      description: e.target.value,
    })
  }
  onMinChange = (e) => {
    this.setState({
      min: Number(e.target.value),
    })
  }
  onSecChange = (e) => {
    this.setState({
      sec: Number(e.target.value),
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addTask(this.state)
    this.setState({
      description: '',
      min: '',
      sec: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo-form"
          value={this.state.value}
          onChange={this.onInputChange}
          placeholder="What needs to be done?"
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          type="number"
          inputMode="numeric"
          min={0}
          value={this.state.min}
          onChange={this.onMinChange}
        ></input>
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          type="number"
          min={0}
          max={59}
          value={this.state.sec}
          onChange={this.onSecChange}
        ></input>
        <button type={'submit'}></button>
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func,
}
