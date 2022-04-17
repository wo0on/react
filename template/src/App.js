import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {

  const [tdlist, setTdlist] = useState([]);
  const [impor, setImpor] = useState("");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [due, setDue] = useState("");
  const [num, setNum] = useState(0);



  const addTd = () => {
    if(impor===""|due===""|title===""){
      alert("필수 값이(제목/기한/중요도) 입력되지 않았습니다.");
    } else{
      setTdlist(tdlist => [...tdlist, {title: title, detail: detail, due: due, impor: impor, num: num}]);
    }
      setNum(num+1);
      setTitle("");
      setDetail("");
      setDue("");
      setImpor(""); 
    
  }
  const deletetd = (inputNum) => {

  }

  
  return (
    <div className="App">
    <h1>할 일 목록</h1>
    <div>
        <input onChange={e=>{setTitle(e.target.value)}} 
        value={title} 
        placeholder="제목"></input>
        <br/>
        <input onChange={e=>{setDue(e.target.value)}} 
        value={due} 
        placeholder='기한'></input>
        <br/> 
        <input onChange={e=>{setImpor(e.target.value)}} 
        value={impor} 
        placeholder='중요도 : 높음/중간/낮음'></input>
        <br/>
        <input onChange={e=>{setDetail(e.target.value)}} 
        value={detail} 
        placeholder='내용'></input>
        <br/>
        
        <p>Title : {title}</p>
        <p>Detail : {detail}</p>
        <p>Due : {due}</p>
        <p>Importance : {impor}</p>
      
      <button onClick={addTd}>add</button>
      <button onClick={()=>{deletetd(tdlist.num)}}>제거</button>
    </div>
    <div >
          {tdlist.title}
        </div>
        <div>
          {tdlist.impor}
        </div>
        <div>
          {tdlist.due}
        </div>
        <div>
          {tdlist.detail}
        </div>
        
        
  </div>
  
);


}


export default App;
