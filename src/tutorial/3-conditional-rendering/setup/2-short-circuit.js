import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText]= useState('');
const [isError, setIsError]= useState( false)
  
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
//  console.log(firstValue) return 'hello world'
// console.log(secondValue) returns an empty string
  return(
   <>
<h1>{text || 'Cobby'}</h1>
<button className="btn " onClick={() => setIsError(!isError)}>toggle error</button>

{isError && <h1>Error...</h1>}
{isError? <p>there is an error.....</p>: <div>
  <h2>there is no error</h2>
</div>}
  </>
  );
};

export default ShortCircuit;
