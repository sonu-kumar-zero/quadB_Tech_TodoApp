import React, { useEffect, useState } from "react";
import TodoElement from "./TodoElement";
import { useSelector } from "react-redux";
import OperationBar from "./OperationBar";
import {
  completedTodoFilter,
  latestFilter,
  notCompletedFilter,
  oldFilter
} from "../utils/dataFormater";

const AllTodosComponent = () => {
  const allTodos = useSelector((state) => state.todos);
  const [allFinalTodos, setAllFinalTodos] = useState(allTodos);

  const selectFilter = (e) => {
    const val = e.target ? e.target.value : "all";
    switch (val) {
      case "all":
        setAllFinalTodos(latestFilter(allTodos));
        break;

      case "completed":
        setAllFinalTodos(completedTodoFilter(allTodos));
        break;

      case "uncompleted":
        setAllFinalTodos(notCompletedFilter(allTodos));
        break;

      case "latest":
        setAllFinalTodos(latestFilter(allTodos));
        break;

      case "oldest":
        setAllFinalTodos(oldFilter(allTodos));
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setAllFinalTodos(latestFilter(allTodos));
  }, [allTodos]);

  return (
    <>
      <OperationBar selectFilter={selectFilter} />
      <div className="px-40 mt-5 overflow-y-scroll text-light-text dark:text-dark-text grid grid-cols-1 gap-5 max-h-[42dvh] remove_scroll_bar">
        {allFinalTodos?.length > 0 &&
          allFinalTodos?.map((todo) => {
            return <TodoElement key={todo.id} todo={todo} />;
          })}
      </div>
    </>
  );
};

export default AllTodosComponent;
