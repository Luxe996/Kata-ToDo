import {Component} from "react";

export class NewTaskForm extends Component  {

    state = {
        value:''
    }

    onInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTask(this.state.value)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input className="new-todo" onChange={this.onInputChange} placeholder="What needs to be done?" autoFocus/>
            </form>
        )
    }

}