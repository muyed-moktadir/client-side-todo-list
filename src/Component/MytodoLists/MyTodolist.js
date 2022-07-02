import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash ,faCheck,faEdit} from "@fortawesome/free-solid-svg-icons";
import './MyTodolist.css'
const MyTodolist = ({ todo }) => {
    const { _id,name } = todo;
    const [todoLists, settodosLists] = useState([]);

    // TODO:Load all bikes from (app.get) api:
    useEffect(() => {
      fetch("https://vast-mesa-84513.herokuapp.com/myTodoList")
        .then((res) => res.json())
        .then((data) => settodosLists(data));
    }, []);
  
    const handleTodoDelete = (id) => {
        const proceed = window.confirm("are you sure want to delete??");
        if (proceed) {
          console.log("deleting the id", id);
          const url = `https://vast-mesa-84513.herokuapp.com/myTodoList/${_id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (todoLists.deletedCount > 0) {
                console.log("delete successfully");
                const remaining = todoLists.filter((todoList) => todoList._id !== id);
                settodosLists(remaining);
              }
            console.log(data);
            });
        //   window.location.reload();
        }
      else{
      }
    };
 
  return (
    <div className="container mx-auto">
      <div className="item-wrapper text-left">
        <h2 className="item-title text-xl">{name}</h2>
        <div className="button-wrapper">
            <button className="btn btn-outline btn-error ml-4" onClick={()=>handleTodoDelete(_id)}>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>{" "}
            </button> 
            <button className="btn btn-outline btn-error ml-4" onClick={()=>handleTodoCheck(_id)}>
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>{" "}
            </button> 
            <button className="btn btn-outline btn-error ml-4" onClick={()=>handleTodoEdit(_id)}>
            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>{" "}
            </button> 

            
        </div>
      </div>
    </div>
  );
};

export default MyTodolist;
