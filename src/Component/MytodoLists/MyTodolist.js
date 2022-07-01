import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import './MyTodolist.css'
const MyTodolist = ({ todo }) => {
  const { name } = todo;
  return (
    <div className="container mx-auto">
      <div className="item-wrapper text-left">
        <h2 className="item-title text-xl">{name}</h2>
        <div className="button-wrapper">
            <button className="btn btn-outline btn-error ml-4">
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>{" "}
            </button> 
        </div>
      </div>
    </div>
  );
};

export default MyTodolist;
