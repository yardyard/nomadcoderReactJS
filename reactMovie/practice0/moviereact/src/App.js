import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// 먼저 컴포넌트를 import 해주어야 함.
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
  <Router>
    <Switch>
       {/* 유저가 해당 경로에 있다면, Detail컴포넌트를 렌더링 해준다는 뜻*/}
      <Route path="/movie">
        <Detail />
      </Route>
      {/* 유저가 해당 경로에 있다면, Home Route컴포넌트를 렌더링 해준다는 뜻*/}
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>);
};


export default App;
