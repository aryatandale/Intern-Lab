npx create-react-app employee-management
cd employee-management
// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    position: '',
    id: Date.now(),
  });

  const handleInputChange = (e) => {
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const addEmployee = () => {
    setEmployees([...employees, newEmployee]);
    setNewEmployee({
      name: '',
      position: '',
      id: Date.now(),
    });
  };

  return (
    <div className="App">
      <h1>Employee Management</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newEmployee.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Position:</label>
        <input
          type="text"
          name="position"
          value={newEmployee.position}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={addEmployee}>Add Employee</button>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.position}
          </li>
        ))}
      </ul>
    </div>

npm start

  );
}

export default App;
