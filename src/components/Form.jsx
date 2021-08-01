import React from 'react'

function Form({inputText,setInputText,todos,setTodos,setStatus}) {
     
     
     const onChangeHandler =(e)=>{
          let val = e.target.value;
          setInputText(val)
     }

     const addTodos = (e)=>{
          e.preventDefault();
          var newValue = {
               id:Math.floor(Math.random()*10000),
               text:inputText,
               completed:false
          }

          setTodos([newValue,...todos])
          // console.log([newValue,...todos])
          setInputText('')
     }


     const statusHandler = (e)=>{
          setStatus(e.target.value)
     }

     
     return (
          <div className='todoForm'>
             <form>
               <input onChange={onChangeHandler} type="text" value={inputText} name="todoForm" id="todoForm"/>
               <button onClick={addTodos}>Add Todos</button>
               
               <select onChange={statusHandler}>
                    <option >All</option>
                    <option >Completed</option>
                    <option >Not Completed</option>
                 
               </select>

             </form>
          </div>
     )
}

export default Form
