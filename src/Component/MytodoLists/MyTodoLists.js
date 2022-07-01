import React, { useEffect, useState } from "react";
import MyTodolist from "./MyTodolist";

const MyTodoLists = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/myTodoList")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-bold my-4">My Todo List</h2>

      {todos.map((todo) => (
        <MyTodolist key={todo._id} todo={todo}></MyTodolist>
      ))}
    </div>
  );
};

export default MyTodoLists;
