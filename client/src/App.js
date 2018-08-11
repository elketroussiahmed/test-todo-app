import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./state/store";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodoForm />
          <TodoList />
        </div>
      </Provider>

    );
  }
}

export default App;
