export const completedTodoFilter = (allTodos) => {
  return allTodos.filter((todo) => todo.completed);
};

export const notCompletedFilter = (allTodos) => {
  return allTodos.filter((todo) => !todo.completed);
};

export const latestFilter = (allTodos) => {
  return [...allTodos].reverse();
};

export const oldFilter = (allTodos) => {
  return allTodos;
};
