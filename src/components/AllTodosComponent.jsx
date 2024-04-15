import React from "react";
import TodoElement from "./TodoElement";
import { useSelector } from "react-redux";

const AllTodosComponent = () => {
  const allTodos = useSelector((state) => state.todos);

  return (
    <>
      <div className="px-40 mt-5 overflow-y-scroll text-light-text dark:text-dark-text grid grid-cols-1 gap-5 max-h-[42dvh] remove_scroll_bar">
        {allTodos?.length > 0 &&
          allTodos?.map((todo) => {
            return <TodoElement key={todo.id} todo={todo} />;
          })}
      </div>
    </>
  );
};

export default AllTodosComponent;
