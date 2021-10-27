import React, { useState } from 'react';
// components should always start with an uppercase
const UseStateBasics = () => {
  // console.log(useState('cobby'))
  // const value = useState(1)[0];
  // const handler= useState(1)[1];
  // console.log(value, handler)
  const[text,setText]= useState('heather nix');
 
 const handleClick =() => {
   if (text === 'Heather Nix') {
     setText('Cereal')

   }
   else {
     setText('Heather Nix')
   }
   
 }
 
 return (<React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick={handleClick}> Change Title</button>
  </React.Fragment>

  );
  
};

export default UseStateBasics;
