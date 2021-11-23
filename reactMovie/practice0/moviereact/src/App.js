// --------- import ---------
import { useEffect, useState } from "react";

function App() {
  // --------- state ---------
const [showing, setShowing] = useState(false);
  // --------- function ---------
const onClick =() => {
  setShowing(prev => !prev);
}

function Hello() {
  useEffect(()=> {
    console.log("Created :)");
    return () => console.log("destoryed")
  }, [])
  return  <h1>Hello</h1>;
}
  // --------- rendering ---------
  return (
    <div>

      {showing ? <Hello />: null}
      {/* 버튼을 클릭시 함수가 호출되고, value가 false이면 "Hide, True이면 "Show"출력*/}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
