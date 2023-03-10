import React from 'react'
import "./styles.css"

interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
}
const InputField = ({todo,setTodo}:Props) => {
  return (
    <form className='input'>
    <input type='text' 
    value={todo}
    onChange={
      (e)=>setTodo(e.target.value)
    }
    placeholder='Enter a wish' className='input_box'></input>
    <button className='input_submit'type='submit'> GO</button>
    
    </form>
  )
}

export default InputField
