import { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

export class Task extends Component {
  render() {
    const { id, description, isDone, createdDate, onDeleted, onEditProperty } = this.props
    return (
      <div className="view">
        <input className="toggle" onChange={() => onEditProperty('isDone', id)} checked={isDone} type="checkbox" />
        <label>
          <span className="description">{description}</span>
          <span className="created">{formatDistanceToNow(createdDate)}</span>
        </label>
        <button className="icon icon-edit" onClick={() => onEditProperty('isEditing', id)}></button>
        <button className="icon icon-destroy" onClick={() => onDeleted(id)}></button>
      </div>
    )
  }
}

Task.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  isDone: PropTypes.bool,
  createdDate: PropTypes.instanceOf(Date),
  onDeleted: PropTypes.bool,
  onEditProperty: PropTypes.bool,
}
