import React from 'react'
import Todo from './Todo'

function List({todos,setTodos,inputText,setInputText,filteredTodos}) {
     return (
          <div>
              {filteredTodos.map((todo)=>{
                   return <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
              })}
          </div>
     )
}

export default List
