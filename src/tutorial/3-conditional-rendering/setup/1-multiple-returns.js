import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/co-bby';
const MultipleReturns = () => {
  const[isLoading, setIsLoading]= useState(true);
  const[isError, setIsError]= useState(false);
  const[user, setUser]=useState('default user');
  
  useEffect(() => {
fetch(url)
.then((response) =>console.log(response.json()))
// .then((user) => {
//   const {login}=user;
//   setUser(login)
//   setIsLoading(false);
// })
.catch((error) => console.log(error));

  },[]);

  if (isLoading){
    return (
    <div>
      <h1>Loading.....</h1>
    </div>
    );
  }
  if(isError){
     return(<div>
      <h1>Error....</h1>
    </div>
    );
  }
   return <div>
     <h1>{user}</h1>
   </div>;
  
};

export default MultipleReturns;
