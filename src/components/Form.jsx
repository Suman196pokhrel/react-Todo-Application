import { Button, TextField, Typography } from '@material-ui/core';
import React from 'react'

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {


     const onChangeHandler = (e) => {
          let val = e.target.value;
          setInputText(val)
     }

     const addTodos = (e) => {
          e.preventDefault();
          if(inputText !== ''){
               var newValue = {
                    id: Math.floor(Math.random() * 10000),
                    text: inputText,
                    completed: false
               }
               setTodos([newValue, ...todos])
               
          }
          setInputText('');
     }


     const statusHandler = (e) => {
          setStatus(e.target.value)
     }


     return (

          <form onSubmit={(e) => { e.preventDefault() }}>
               <div className='form1'>
                    <TextField autoComplete='off' id="outlined-basic" label="Outlined" variant="outlined" onChange={onChangeHandler} type="text" value={inputText} name="todoForm" />
                    <Button className='button1' variant="contained" color="primary" onClick={addTodos}>Add Todos </Button>
               </div>


               <select onChange={statusHandler} className='comboBox'>
                    <option >All</option>
                    <option >Completed</option>
                    <option >Not Completed</option>

               </select>

          </form>

     )
}

export default Form
