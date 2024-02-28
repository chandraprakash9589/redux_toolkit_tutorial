import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/TodoSlice";
export const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>Todos</h1>

        {todos.map((todo) => (
          <ol>
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                remove todo
              </button>
            </li>
          </ol>
        ))}
      </div>
    </>
  );
};
