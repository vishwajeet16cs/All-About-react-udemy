import React from 'react';
type Person = {
  name: string;
  roll: number;
};
const Todos: React.FC<{ items: string[],number:number,emp:Person }> = (props) => {
  return (
    <ul>
      <h1>{props.emp.name}</h1>
      <h1>{props.number}</h1>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;