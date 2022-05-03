import React, { useState } from 'react';


const InputBox = ({ todoList, setTodoList }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [due, setDue] = useState('');
  const [importance, setImportance] = useState('');

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onChangeInput1 = (e) => {
    setTitle(e.target.value);
  };

  const onChangeInput2 = (e) => {
    setDue(e.target.value);
  };
  const onChangeInput3 = (e) => {
    setImportance(e.target.value);
  };
  const onPressSubmitButton = (e) => {
    e.preventDefault();

    const nextTodoList = todoList.concat({
      id: todoList.length,
      text,
      title,
      due,
      importance,
      deleted: false,
    });
    setTodoList(nextTodoList);
    setText('');
    setTitle('');
    setDue('');
    setImportance('');
  };
  
  return (
    <form onSubmit={onPressSubmitButton} >
      <input
        value={title}
        placeholder="제목을 입력해주세요"
        onChange={onChangeInput1}
      />
      <input
        value={text}
        placeholder="내용을 입력해주세요"
        onChange={onChangeInput}
      />
      <input
        value={due}
        placeholder="기한을 입력해주세요"
        onChange={onChangeInput2}
      />
      <input
        value={importance}
        placeholder="중요도(높음/중간/낮음)을 입력해주세요"
        onChange={onChangeInput3}
      />
      
      <button type="submit">
        추가
      </button>
    </form>
  );
};


export default InputBox;
