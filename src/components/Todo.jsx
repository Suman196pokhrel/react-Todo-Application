import { Button } from '@material-ui/core'
import React from 'react'

function Todo({todo,setTodos,todos,inputText,setInputText}) {


     const deleteTodo =()=>{
         setTodos(todos.filter((item)=>{
              return item.id !== todo.id
         }))
     }

     
     const checkTodo = ()=>{
          setTodos(todos.map((item)=>{
               if(item.id===todo.id){
                    return{
                         ...item,completed:!item.completed
                    }
               }else{
                    return item
               }
          }))
     }
     

     return (
          <div className='todoList'>
               <li className='todoItem'>{todo.text}</li>
               <div className='todoBtns'>
                    <Button variant="outlined" color="primary" onClick={checkTodo}> Check </Button>
                    <Button variant="outlined" color="secondary" onClick={deleteTodo}>Delete </Button>
               </div>
               
          </div>
     )
}

export default Todo
