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
               <button onClick={checkTodo}> Check </button>
               <button onClick={deleteTodo}>Delete </button>
          </div>
     )
}

export default Todo
