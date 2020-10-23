import React from 'react';
import './App.css';
import Employee from './Employee'

const employee = [
  {
    name:"David",
    id:"ABC"
  } 
];
 


function App() {
  const baseEmployeeObject = {
    role:"employee",
    company:"IBM"
  };
  const firstEmployee = {...baseEmployeeObject,...employee[0]};
  return (
    <div className="App">
      <Employee {...firstEmployee}/>
    </div>
  );
}

export default App;
