import { useState } from 'react'
import NewTodo from './components/NewTodo'
import Todos from './components/Todos'
import Todo from './models/todo'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)
    setTodos((preTodos) => {
      return preTodos.concat(newTodo)
    })
  }
  const removeTodoHandler = (todoId: string) => {
    setTodos((preTodos) => {
      return preTodos.filter((todo) => todo.id !== todoId)
    })
  }
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  )
}

export default App
