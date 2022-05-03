import React, { useState } from 'react';
import InputBox from './components/InputBox';
import ToDoItemList from './components/ToDoItemList';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div >
      
      <InputBox todoList={todoList} setTodoList={setTodoList} />

      <ToDoItemList
        title={'할 일'}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      
    </div>
  );
};

export default App;
