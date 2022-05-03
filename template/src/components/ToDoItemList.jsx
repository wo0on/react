import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoItemList = ({ title, todoList, setTodoList }) => (
  <div>
    <p>{title}</p>

    <ul>
      {todoList && 
        todoList.map((todoItem) => {
          if (todoItem.deleted) return null;

          return (
            <ToDoItem
              key={todoItem.id}
              todoItem={todoItem}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          );
        })}
    </ul>
  </div>
);


export default ToDoItemList;
