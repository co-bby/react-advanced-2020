import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the submit event from refreshing the page
    if (firstName && email){
      const person={firstName:firstName, email:email}
      setPeople((people)=>{
        return [...people,person]
      });
      setFirstName('')
      setEmail('')
      
    } else {
      console.log('empty values')
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-contol">
            <label htmlFor="first">Name :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-contol">
            <label htmlFor="first">Email:</label>
            <input 
            type="email" 
            id="email"
             name="email"  
              onChange={(e)=> setEmail(e.target.value)}
             />
          </div>
          <button type="submit">add person</button>
        </form>
        {
          people.map((person)=>{
            const { id, firstName,Email} = person
            return (<div className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
            )
          })
        }
      </article>
    </>
  );
};

export default ControlledInputs;
