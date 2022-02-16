import React, { useState } from 'react';
//hooks start with use

const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState('random title'); //set the initial text
  
  const handleClick = () => {
    if(text === 'random title'){
      setText('hello World');
    }
    else{
      setText('random title');
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
