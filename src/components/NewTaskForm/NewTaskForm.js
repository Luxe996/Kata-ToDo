import { Component } from 'react'
import PropTypes from 'prop-types'

export class NewTaskForm extends Component {
  state = {
    value: '',
  }

  onInputChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addTask(this.state.value)
    this.setState({
      value: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          value={this.state.value}
          onChange={this.onInputChange}
          placeholder="What needs to be done?"
        />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func,
}
