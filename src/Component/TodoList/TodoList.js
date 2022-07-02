import React, { useState } from "react";
import MyTodoLists from "../MytodoLists/MyTodoLists";

const TodoList = () => {
  //   const [] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    const name = event.target.name.value;

    const addMyTodoList = {
      name,
    };
    console.log(name);

    // // TODO:send the user post method to backend server
    fetch("https://vast-mesa-84513.herokuapp.com/myTodoList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addMyTodoList),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(" success", data);
        alert("todo added successfully  ..!!!");
        event.target.reset();
      });
  };

  return (
    <div className="my-16">
      <div>
        <h2 className="text-2xl font-bold"> What To Do My Task?? </h2>
        <form className="my-7" onSubmit={handleAddTodo}>
          <input
            type="text"
            name="name"
            placeholder="add your task"
            className="input input-bordered input-info w-full max-w-xs shadow-2xl mx-2"
            required
          />

          <button className="btn btn-secondary" type="submit">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoList;
