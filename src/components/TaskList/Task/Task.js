import {Component} from "react";

export class Task extends Component {
    render() {
        const {description, onDeleted, id,onEditProperty, isDone} = this.props
        return (
            <div className="view">
                <input className="toggle"
                       onChange={() => onEditProperty('isDone', id)}
                       checked={isDone}
                       type="checkbox"/>
                <label>
                    <span className="description">{description}</span>
                    <span className="created">created 17 seconds ago</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy" onClick={() => onDeleted(id)}></button>
            </div>
        )
    }
}