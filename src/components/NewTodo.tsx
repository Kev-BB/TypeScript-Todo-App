import { useRef } from 'react'
import classes from './NewTodo.module.css'
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null)
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const enteredText = todoTextInputRef.current!.value
    if (enteredText.trim().length === 0) {
      // hata fırlat
      return
    }
    props.onAddTodo(enteredText)
    todoTextInputRef.current!.value = ''
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  )
}
export default NewTodo
