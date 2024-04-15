import React, { useState } from "react";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { IoColorPaletteOutline } from "react-icons/io5";

import { useDispatch } from "react-redux";
import {
  updateTodos,
  completedTodoToggles,
  removeTodos,
  setNewTodoColors
} from "../feature/todo/todoSlice";

const TodoElement = ({ todo }) => {
  const [isTodoEdit, SetIsTodoEdit] = useState(false);
  const [isColorEdit, SetIsColorEdit] = useState(false);
  const [todoText, setTodoText] = useState(todo.text || "");
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const [todoDisplay, setTodoDisplay] = useState(false);

  const dispatch = useDispatch();

  const updateTodo = () => {
    dispatch(updateTodos({ todoId: todo.id, todoText: todoText }));
    SetIsTodoEdit(false);
  };

  const toggleTodoCompltiton = () => {
    dispatch(completedTodoToggles({ todoId: todo.id }));
    setIsCompleted((prev) => !prev);
  };

  const deleteTodo = () => {
    dispatch(removeTodos({ todoId: todo.id }));
  };

  const setNewTodoColor = (e) => {
    const newColor = e.target?.value;
    dispatch(setNewTodoColors({ todoId: todo.id, newColor: newColor }));
    SetIsColorEdit(false);
  };

  return (
    <>
      {todoDisplay && (
        <div className="absolute top-0 left-0 w-[100dvw] h-[100dvh] bg-dark-primary bg-opacity-50 flex justify-center items-center text-dark-text dark:text-dark-text">
          <div className="w-[30dvw] bg-dark-secondary px-10 py-5 rounded-lg shadow-md h-fit flex flex-col gap-5 parent">
            <div className="flex justify-end">
              <button className="btn" onClick={() => setTodoDisplay(false)}>
                X
              </button>
            </div>
            {isTodoEdit ? (
              <textarea
                className="px-5 py-2 text-dark-text bg-dark-accent outline-none rounded-lg remove_scroll_bar w-full h-fit"
                value={todoText}
                onChange={(e) => {
                  setTodoText(e.target.value);
                }}
                rows={10}
              />
            ) : (
              <div className="flex items-center w-full">{todoText}</div>
            )}
            {isTodoEdit ? (
              <div className="grid grid-cols-2 gap-5">
                <button className="btn text-lg" onClick={updateTodo}>
                  Save Changes
                </button>
                <button
                  className="btn text-lg"
                  onClick={() => SetIsTodoEdit(false)}
                >
                  Discard Changes
                </button>
              </div>
            ) : (
              <div className="flex gap-3 justify-around items-center">
                {!isCompleted ? (
                  <button
                    className="bg-dark-text text-light-text px-4 py-4 w-fit rounded hover:outline h-fit"
                    onClick={() => setIsCompleted((prev) => !prev)}
                  ></button>
                ) : (
                  <button
                    className="bg-dark-text text-light-text flex px-2 py-2 w-fit rounded hover:outline h-fit"
                    onClick={() => setIsCompleted((prev) => !prev)}
                  >
                    <FaCheck />
                  </button>
                )}
                <button onClick={deleteTodo}>
                  <MdDeleteOutline
                    size={32}
                    className="hover:outline rounded"
                  />
                </button>
                <button onClick={() => SetIsTodoEdit(true)}>
                  <MdOutlineEdit size={32} className="hover:outline rounded" />
                </button>
                <div className="relative">
                  {isColorEdit && (
                    <div className="absolute rounded-lg w-20 gap-1 z-10 -top-10 grid grid-cols-2">
                      <button
                        className="px-5 py-5 rounded-lg hover:outline w-full bg-red-600"
                        value={"bg-red-600"}
                        onClick={setNewTodoColor}
                      ></button>
                      <button
                        className="px-5 py-5 rounded-lg hover:outline w-full bg-blue-600"
                        value={"bg-blue-600"}
                        onClick={setNewTodoColor}
                      ></button>
                      <button
                        className="px-5 py-5 rounded-lg hover:outline w-full bg-green-600"
                        value={"bg-green-600"}
                        onClick={setNewTodoColor}
                      ></button>
                      <button
                        className="px-5 py-5 rounded-lg hover:outline w-full bg-yellow-600"
                        value={"bg-yellow-600"}
                        onClick={setNewTodoColor}
                      ></button>
                    </div>
                  )}
                  <button onClick={() => SetIsColorEdit(true)}>
                    <IoColorPaletteOutline
                      size={32}
                      className="hover:outline rounded"
                    />
                  </button>
                </div>
              </div>
            )}
            <div className="text-center">{todo.date}</div>
          </div>
        </div>
      )}
      <div
        className={` text-dark-text flex px-5 py-4 w-full gap-0 rounded-lg shadow-md shadow-light-primary ${
          isCompleted ? "bg-dark-accent" : todo.color
        }`}
      >
        {isTodoEdit && !todoDisplay ? (
          <textarea
            className="w-2/3 px-5 py-2 text-dark-text bg-dark-accent outline-none rounded-lg remove_scroll_bar"
            value={todoText}
            onChange={(e) => {
              setTodoText(e.target.value);
            }}
          />
        ) : (
          <div
            className="h-full flex items-center py-2 w-2/3 cursor-pointer "
            onClick={() => setTodoDisplay(true)}
          >
            <div className="w-full truncate flex items-center ">{todoText}</div>
          </div>
        )}
        {isTodoEdit ? (
          <div className="grid grid-cols-2 gap-5 w-1/3 px-5">
            <button className="btn " onClick={updateTodo}>
              Save Changes
            </button>
            <button className="btn " onClick={() => SetIsTodoEdit(false)}>
              Discard Changes
            </button>
          </div>
        ) : (
          <div className="flex gap-3 justify-around w-1/3 items-center">
            {!isCompleted ? (
              <button
                className="bg-dark-text text-light-text px-4 py-4 w-fit rounded hover:outline h-fit"
                onClick={toggleTodoCompltiton}
              ></button>
            ) : (
              <button
                className="bg-dark-text text-light-text flex px-2 py-2 w-fit rounded hover:outline h-fit"
                onClick={toggleTodoCompltiton}
              >
                <FaCheck />
              </button>
            )}
            <button onClick={deleteTodo}>
              <MdDeleteOutline size={32} className="hover:outline rounded" />
            </button>
            <button onClick={() => SetIsTodoEdit(true)}>
              <MdOutlineEdit size={32} className="hover:outline rounded" />
            </button>
            <div className="relative">
              {isColorEdit && !todoDisplay && !isCompleted && (
                <div className="absolute rounded-lg w-44 -translate-x-2/3 gap-1 z-10 grid grid-cols-4">
                  <button
                    className="px-5 py-5 rounded-lg outline-black outline hover:outline-white w-full bg-red-600"
                    value={"bg-red-600"}
                    onClick={setNewTodoColor}
                  ></button>
                  <button
                    className="px-5 py-5 rounded-lg outline-black outline hover:outline-white w-full bg-blue-600"
                    value={"bg-blue-600"}
                    onClick={setNewTodoColor}
                  ></button>
                  <button
                    className="px-5 py-5 rounded-lg outline-black outline hover:outline-white w-full bg-green-600"
                    value={"bg-green-600"}
                    onClick={setNewTodoColor}
                  ></button>
                  <button
                    className="px-5 py-5 rounded-lg outline-black outline hover:outline-white w-full bg-yellow-600"
                    value={"bg-yellow-600"}
                    onClick={setNewTodoColor}
                  ></button>
                </div>
              )}
              <button onClick={() => SetIsColorEdit(true)}>
                <IoColorPaletteOutline
                  size={32}
                  className="hover:outline rounded"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TodoElement;
