import React from "react";
import Styles from "./button.module.scss";
import { useState } from 'react'

function Button(props) {
  const [count, setCount] = useState(0);

  

  const increment = () => {
    if (count >= 0) {
      const newCount = count + 1;
      setCount(newCount);
      props.countSetter(newCount, true);
   
    }
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      props.countSetter(newCount, false);
   
    }
  };
  return (
    <div className={Styles.btnArea}>
      <span className={Styles.increment} onClick={() => decrement()}>
        -
      </span>
      <span className={Styles.count}>{count}</span>
      <span className={Styles.decrement} onClick={() => increment()}>
        +
      </span>
    </div>
  );
}

export default Button;
