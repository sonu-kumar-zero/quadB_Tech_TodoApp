import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../feature/todo/todoSlice";

const TodoAddBar = () => {
  const [todoText, setTodotext] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(addTodos({ todo: todoText, color: "bg-[#ff0000]" }));
    setTodotext("");
  };

  const discardTodo = () => {
    setTodotext("");
  };

  return (
    <div className=" flex items-start px-40 py-10 gap-5 text-light-text dark:text-dark-text w-full">
      <div className="w-2/3 flex items-center">
        <textarea
          type="text"
          className="w-full rounded px-5 py-2 outline-none text-light-text dark:text-light-text text-xl remove_scroll_bar"
          placeholder="Enter Your Todo"
          rows={5}
          value={todoText}
          onChange={(e) => setTodotext(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 w-1/3 gap-5">
        <button className="btn text-2xl" onClick={addTodo}>
          Add
        </button>
        <button className="btn text-2xl" onClick={discardTodo}>
          Discard
        </button>
      </div>
    </div>
  );
};

export default TodoAddBar;
