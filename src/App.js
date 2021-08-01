import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import {Card, Typography} from '@material-ui/core'


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
        <Typography variant='h3'>
          Todo Application
        </Typography>
        <hr></hr>

        <Form 
        todos = {todos}
        setTodos ={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        />

        <div className='listContainer'>
          <List 
          todos = {todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          filteredTodos = {filteredTodos}
          />
        </div>
        

    </div>
  );
}

export default App;
