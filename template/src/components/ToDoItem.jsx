import React, { useState } from 'react';


const ToDoItem = ({ todoItem, todoList, setTodoList }) => {

  const onClickDeleteButton = () => {
      const nextTodoList = todoList.map((item) => ({
        ...item,
        deleted: item.id === todoItem.id ? true : item.deleted,
      }));

      setTodoList(nextTodoList);
  };

  return (
    <li>
      {
          <span>
            제목 : {todoItem.title} 내용 : {todoItem.text} 기한 : {todoItem.due} 중요도 : {todoItem.importance}
          </span>
        
      }
      <button
        onClick={onClickDeleteButton}
      >
        삭제
      </button>
    </li>
  );
};



export default ToDoItem;
