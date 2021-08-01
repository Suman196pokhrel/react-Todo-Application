import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';


function App() {



  // STATES 
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('All')
  const [filteredTodos,setFilteredTodos] = useState([])

  // FUNCTION 
  const filterHandler=()=>{
    switch(status){
      case "Completed":
        setFilteredTodos(todos.filter((item)=> item.completed === true))
        break
      case "Not Completed":
        setFilteredTodos(todos.filter((item)=> item.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break

    }
  }

  useEffect(()=>{
    filterHandler()
  },[todos, status])


  return (
    <div className="App">
     <h1>ToDo Applicaiton</h1>

    <Form 
    todos = {todos}
    setTodos ={setTodos}
    inputText={inputText}
     setInputText={setInputText}
    setStatus={setStatus}
     />

    <List 
    todos = {todos}
     setTodos={setTodos}
     inputText={inputText}
     setInputText={setInputText}
     filteredTodos = {filteredTodos}
     />

    </div>
  );
}

export default App;
