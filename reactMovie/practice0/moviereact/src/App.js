// button.js에 있는 Button 컴포넌트를 import한다.
import Button from "./button";
import PropTypes from "prop-types";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back to React!</h1>
      <Button text={"Continue"}/>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default App;
