import React from "react";
import TodoElement from "./TodoElement";

const AllTodosComponent = () => {
  return (
    <>
      <div className="px-40 mt-5 overflow-y-scroll text-light-text dark:text-dark-text grid grid-cols-1 gap-5 max-h-[42dvh] remove_scroll_bar">
        <TodoElement />
        <TodoElement />
        <TodoElement />
        <TodoElement />
        <TodoElement />
        <TodoElement />
      </div>
    </>
  );
};

export default AllTodosComponent;
