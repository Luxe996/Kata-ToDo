import {Component} from "react";

export class NewTaskForm extends Component  {

    render() {
        return (
            <form>
                <input className="new-todo" placeholder="What needs to be done?" autoFocus/>
            </form>
        )
    }

}