import './components/todo/todo.css';
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg'
import { useState } from 'react';
const App = () => {
  const name = "Ho";
  const data = {
    age: 22,
    address: "Binh Thuan",
    phone: "0123456789"
  }
  const addNewTodo = (name) => {
    alert(`toi ten la ${name}`)
  }
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Linh" },
    { id: 2, name: "Ho" },
  ])

  return (
    <div className="todo-container">
      <div className="todo-title">
        Todo List
      </div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={name}
        data={data}

        todoList={todoList}
      />
      <div>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}



export default App
