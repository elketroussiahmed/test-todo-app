import React, {Component} from "react";
import {connect} from "react-redux";

export class TodoList extends Component {
    render() {
        return ( 
        <div >
          <ul>
            {this.props.todos.map(function(todoItem){
              return <li>{todoItem.title}</li>;
            })}
          </ul>
        </div>
        );
    }
}


const mapStateToProps = state => {
  return {
    todos : state.todos.todosList,
  }
}


export default connect(
    mapStateToProps,
    null
)(TodoList);