// --------- import ---------
import { useEffect, useState } from "react";

function App() {
  // --------- state ---------
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  
  // --------- function ---------
  const onChange=(event) => {
    setToDo(event.target.value); };
  
    const onSubmit=(event) => {
    // form의 submit 이벤트시 새로고침 되는 것을 막아줌.
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    // ...array의 의미는 기존 array에 index들을 가져온다는 의미이다.
    // 아래 코드는 toDo를 기존 currentArray에 새로운 인덱스로 넣어서 새로운 array를 만든다는 뜻이다.
    setToDos(currentArray => [toDo, ...currentArray]);
    // 입력을 제출하였으면 다시 input창을 "" 빈 값을 넣어줌.
    setToDo("");
  };
  // --------- rendering ---------
  return (
    <div>
      <h1>My To-Dos ({toDos.length})</h1>
      <form>
        <input onChange={onChange} value={toDo} type="text" placeholder="write your to do..." />
        <button onClick={onSubmit}>Add to Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, index)=> <li key={index}>{toDo}</li>)}
      </ul>
    </div>
  );
}

export default App;
