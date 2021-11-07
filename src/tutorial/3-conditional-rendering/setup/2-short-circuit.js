import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText]= useState('');

  
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
//  console.log(firstValue) return 'hello world'
// console.log(secondValue) returns an empty string
  return <>
<h1>{text}</h1>
  </>
};

export default ShortCircuit;
