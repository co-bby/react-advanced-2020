import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
const [value, setValue]= useState(0);
useEffect(() => {
console.log('call useEffect')
if(value>=1){
  
  document.title= `New Messages is ${value}`;
}
}, [value])
useEffect(() =>{
  console.log('hello world')
},[value])

console.log('render component')
  return (
  <>
<h1>{value}</h1>
<button onClick={() =>setValue(value + 1) } className="btn">click Me</button>

  </>
  );
};

export default UseEffectBasics;
