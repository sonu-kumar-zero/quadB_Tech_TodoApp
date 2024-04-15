import { createSlice, nanoid } from "@reduxjs/toolkit";

const localStoragedata = localStorage.getItem("yourTodo");

console.log(localStoragedata);

const parsedData = localStoragedata
  ? JSON.parse(localStoragedata)?.todos
  : null;

const initialState = {
  todos: parsedData ? parsedData : []
};

const addTodo = (state, action) => {
  const todo = {
    id: nanoid(),
    text: action.payload.todo,
    completed: false,
    date: new Date().toLocaleDateString(),
    color: action.payload.color
  };
  state.todos.push(todo);
  localStorage.setItem("yourTodo", JSON.stringify({ todos: state.todos }));
};

const removeTodo = (state, action) => {
  const { todoId } = action.payload;
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
  localStorage.setItem("yourTodo", JSON.stringify({ todos: state.todos }));
};

const updateTodo = (state, action) => {
  const { todoId, todoText } = action.payload;

  const index = state.todos.findIndex((todo) => todo.id === todoId);
  if (index !== -1) {
    state.todos[index].text = todoText;
    localStorage.setItem("yourTodo", JSON.stringify({ todos: state.todos }));
  }
};

const completedTodoToggle = (state, action) => {
  const { todoId } = action.payload;
  const index = state.todos.findIndex((todo) => todo.id === todoId);
  if (index !== -1) {
    state.todos[index].completed = state.todos[index].completed ? false : true;
    localStorage.setItem("yourTodo", JSON.stringify({ todos: state.todos }));
  }
};

const setNewTodoColor = (state, action) => {
  const { todoId, newColor } = action.payload;
  const index = state.todos.findIndex((todo) => todo.id === todoId);
  if (index !== -1) {
    state.todos[index].color = newColor;
    localStorage.setItem("yourTodo", JSON.stringify({ todos: state.todos }));
  }
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos: addTodo,
    removeTodos: removeTodo,
    updateTodos: updateTodo,
    completedTodoToggles: completedTodoToggle,
    setNewTodoColors: setNewTodoColor
  }
});
export const {
  addTodos,
  removeTodos,
  updateTodos,
  completedTodoToggles,
  setNewTodoColors
} = todoSlice.actions;

export default todoSlice.reducer;
