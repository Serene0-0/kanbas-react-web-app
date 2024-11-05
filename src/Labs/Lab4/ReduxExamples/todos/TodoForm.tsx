import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer); // 从 Redux 中获取 todo
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex border ">
      <input
        type="text"
        className="form-control me-5"
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
      <button onClick={() => dispatch(updateTodo(todo))} className="btn btn-warning me-2 float-end" id="wd-update-todo-click">Update</button>
      <button onClick={() => dispatch(addTodo(todo))} className="btn btn-success me-2 float-end" id="wd-add-todo-click">Add</button>
      
      
    </li>
  );
}
  