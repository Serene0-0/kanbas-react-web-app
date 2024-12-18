import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo } : { todo: { id: string; title: string }}) {
  const dispatch = useDispatch();

  return (
    <li key={todo.id} className="list-group-item border">
      <button onClick={() => dispatch(deleteTodo(todo.id))} className="btn btn-danger me-2 float-end" id="wd-delete-todo-click">Delete</button>
      <button onClick={() => dispatch(setTodo(todo))} className="btn btn-primary me-2 float-end" id="wd-set-todo-click">Edit</button>
      {todo.title}
    </li>
  );
}