// @flow weak

//--------------------------------------------------------------------------
// Const
//--------------------------------------------------------------------------
export const ADD_TODO = "todoapp/todos/ADD_TODO";
export const ADD_TODO_SUCCESS = "todoapp/todos/ADD_TODO_SUCCESS";
export const REORDER_TODO = "todoapp/todos/REORDER_TODO";

/*
type TodosStore = {
  todosList: Array<object>,
  visibilityFilter: string,
}
*/

//--------------------------------------------------------------------------
// Reducer
//--------------------------------------------------------------------------
const defaultState = {
  todosList: [],
  visibilityFilter: null
}
export default function reducer(state = defaultState/*: TodosStore*/ , action = {}) {
  switch (action.type) {

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todosList: [...state.todosList, action.todo]
      }

    default:
      return state;
  }
}

//--------------------------------------------------------------------------
// Action Creators
//--------------------------------------------------------------------------
export function addTodoSucess(todo) {
  return {
    type: ADD_TODO_SUCCESS,
    payload: {
      todo
    }
  };
}

//--------------------------------------------------------------------------
// Async Action Creators
//--------------------------------------------------------------------------
export function addTodo(todo) {
  return (dispatch, getState) => {
    if (todo.title) {
      dispatch(addTodoSucess(todo))
    }
    //TODO else dispatch an error
  }
}