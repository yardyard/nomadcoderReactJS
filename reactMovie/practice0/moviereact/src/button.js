import styled from "./Button.module.css";

function Button({text}){
    return <button className={styled.btn}>{text}</button>;
}

// App.js에서 Button을 가져올 수 있도록 만든다.
export default Button;