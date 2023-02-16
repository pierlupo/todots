import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDo from "./interfaces/ToDo"


function App() {
  const [ToDos, setToDos] = useState<ToDo[]>([])

  const addToDoHandler = (toDo: ToDo) => {
    setToDos([...ToDos, toDo])
  }

  return (
    <div className="App">
     <ToDoForm onAddToDo={addToDoHandler}/>
     
    </div>
  );
}

export default App;
