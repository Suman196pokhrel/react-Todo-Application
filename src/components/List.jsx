import React from 'react'
import Todo from './Todo'
import { CSSTransition, TransitionGroup } from 'react-transition-group';


function List({todos,setTodos,inputText,setInputText,filteredTodos}) {
     return (
          
           <TransitionGroup component='div'>
              {filteredTodos.map((todo)=>{
                   return (
                    <CSSTransition key={todo.id} timeout={700} classNames="item">
                         <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
                    </CSSTransition>
                   )
              })}
          
          </TransitionGroup>
     )
}

export default List
