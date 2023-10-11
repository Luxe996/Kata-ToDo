import './TaskFilter.css'
import PropTypes from 'prop-types'
import { Component } from 'react'

const classSelected = 'selected'

export class TasksFilter extends Component {
  getFilterButtons = () => {
    return document.querySelectorAll('.filters button')
  }

  onButtonClick = (event) => {
    if (event.target.classList.contains(classSelected)) {
      return
    }

    const buttons = this.getFilterButtons()
    for (let button of buttons) {
      button.classList.remove(classSelected)
    }

    event.target.classList.add(classSelected)
    this.props.onFilterChange(event.target.textContent)
  }

  render() {
    return (
      <ul className="filters">
        <li>
          <button onClick={this.onButtonClick} className="selected">
            All
          </button>
        </li>
        <li>
          <button onClick={this.onButtonClick}>Active</button>
        </li>
        <li>
          <button onClick={this.onButtonClick}>Completed</button>
        </li>
      </ul>
    )
  }
}

TasksFilter.propTypes = {
  onFilterChange: PropTypes.func,
}
