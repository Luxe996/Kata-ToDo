import { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

import './Task.css'

export class Task extends Component {
  state = {
    min: this.props.timer.min,
    sec: this.props.timer.sec,
    paused: true,
    over: false,
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    const { min, sec, paused, over } = this.state
    if (paused) return
    if (over) clearInterval(this.timerID)
    if (min === 0 && sec === 0) {
      this.setState({ over: true })
    } else if (sec === 0) {
      this.setState({
        min: min - 1,
        sec: 59,
      })
    } else {
      this.setState({
        min: min,
        sec: sec - 1,
      })
    }
  }

  onPause = (status) => {
    this.setState({ paused: status })
  }
  render() {
    const { id, description, isDone, createdDate, onDeleted, onEditProperty } = this.props
    const { min, sec } = this.state
    return (
      <div className="view">
        <input className="toggle" onChange={() => onEditProperty('isDone', id)} checked={isDone} type="checkbox" />
        <label>
          <span className="title">{description}</span>
          <span className="description">
            {min}:{sec}
          </span>
          <span className="created">{formatDistanceToNow(createdDate, { includeSeconds: true })}</span>
        </label>
        <button className="icon icon-edit" onClick={() => onEditProperty('isEditing', id)}></button>
        <button className="icon icon-destroy" onClick={() => onDeleted(id)}></button>
        {this.state.paused && <button className="icon icon-play" onClick={() => this.onPause(false)}></button>}
        {!this.state.paused && <button className="icon icon-pause" onClick={() => this.onPause(true)}></button>}
      </div>
    )
  }
}

Task.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  isDone: PropTypes.bool,
  createdDate: PropTypes.instanceOf(Date),
  onDeleted: PropTypes.func,
  onEditProperty: PropTypes.func,
}
