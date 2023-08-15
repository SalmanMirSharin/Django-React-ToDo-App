import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const TodoList = ({ todos, delete_todo,editTodo }) => {

  return (
    <div className="todo-list">
      {todos?.map((todo) => {
        return (
          <div className="todo-list-item" key={todo.id}>
            <div className="task">
              <input type="checkbox" />
              <p>{todo.task}</p>
            </div>

            <div className="btn-container">
              <div className="edit">
                <TbEdit size={25} onClick={()=>editTodo(todo.id)} />
              </div>
              <div className="del">
                <MdDelete size={25} onClick={() => delete_todo(todo.id)} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
