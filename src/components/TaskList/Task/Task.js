import { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

import './Task.css'

export class Task extends Component {
  state = {
    totalSec: this.props.totalSec,
    paused: true,
    over: false,
  }

  componentWillUnmount() {
    this.stopTimer()
  }

  startTimer = () => {
    if (!this.timerID) {
      this.timerID = setInterval(() => this.tick(), 1000)
    }
  }

  stopTimer = () => {
    if (this.timerID) {
      clearInterval(this.timerID)
      this.timerID = null
    }
  }

  tick = () => {
    const { totalSec, paused, over } = this.state
    if (paused || over) return
    if (totalSec === 0) {
      this.setState({ over: true })
      this.stopTimer()
    } else {
      this.setState({
        totalSec: totalSec - 1,
      })
    }
  }

  onPause = (status) => {
    // this.setState({ paused: status })
    this.setState({ paused: status }, () => {
      if (status) {
        this.stopTimer()
      } else {
        this.startTimer()
      }
    })
  }
  render() {
    const { id, description, isDone, createdDate, onDeleted, onEditProperty } = this.props
    const { totalSec } = this.state
    const min = Math.floor(totalSec / 60)
    const sec = totalSec % 60
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
