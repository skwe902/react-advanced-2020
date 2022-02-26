import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if(value >= 1){
      document.title = `New Messages(${value})`;
    }
  }, [value]); //only want to run the useEffect in the initial render add an empty array
  //now it will run when the value changes (which is in the dependency list)
  

  return (
    <>
    <h1>{value}</h1>
    <button className='btn' onClick={()=> setValue(value + 1)}>
      click me
    </button>
    </>
  );
};

export default UseEffectBasics;
