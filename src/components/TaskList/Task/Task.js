import {Component} from "react";

export class Task extends Component {

    constructor() {
        super();

        this.state = {
            done:false
        }

        // this.onToggleProperty = () => {
        //    this.setState(({done}) => {
        //        return {
        //            done:!done
        //        }
        //
        //    })
        // }
    }
    render() {
        const {description, onDeleted, id} = this.props
        return (
            <div className="view">
                <input className="toggle"
                       onChange={() => this.props.onEditProperty('isDone', id)}
                       checked={this.props.isDone}
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