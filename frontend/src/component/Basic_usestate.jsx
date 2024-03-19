import { useState } from "react";
import './component_css/Array.css';
function Basic_usestate() {
   
    
      
    const [count, setCount] = useState(0);


    function MyButton({ count, onClick }) {
        return (
          <button onClick={onClick}>
            Clicked {count} times
          </button>
        );
      }
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
  };

  export default Basic_usestate;