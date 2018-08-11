import React, {
  Component
} from "react";
import {
  connect
} from "react-redux";
import * as actions from "../state/ducks/todos.js";

//TODO change it and make it a dumb component, dont use ref
export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.title = React.createRef();
    this.desc = React.createRef();
    this.dueDate = React.createRef();
  }

  handleAdd() {
    const todo = {
      title: this.title.current,
      desc: this.desc,
      dueDate: this.dueDate,
    }
    this.props.addTodo(todo)
  }

  render() {
    return ( 
      <div >
        <input type = "text" / >
        <input type = "text" / >
        <input type = "date" / >
        <button onClick = {this.handleAdd} > Add </button> 
      </div>
    );
  }
}

const mapDispatchToProps = {
  addTodo: actions.addTodo,

};

export default connect(
  null,
  mapDispatchToProps
)(TodoForm);