import './components/todo/todo.css';
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import reactLogo from './assets/react.svg'
import { useState } from 'react';
const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Linh" },
    // { id: 2, name: "Ho" },
  ])
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(3, 1000000),
      name: name
    }

    //biến setTodoList để thay đổi giá trị của todoList mỗi lần cập nhật giống thêm mới
    //...todoList để giữ lại các giá trị cũ
    setTodoList([...todoList, newTodo])
  }
  const deleteTodo = (id) => {
    //console.log('>>> check id: ', id)
    const newTodo = todoList.filter(item => item.id !== id)
    setTodoList(newTodo)
  }
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }




  return (
    <div className="todo-container">
      <div className="todo-title">
        Todo List
      </div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      {/* toán tử diều kiện :  dk ? đúng thì viết gì đúng ở đây : cái này nếu đk sai */}
      {todoList.length > 0 ?
        <TodoData

          todoList={todoList}
          deleteTodo={deleteTodo}
        />
        :
        <div>
          <img src={reactLogo} className='logo' />
        </div>
      }
    </div>
  )
}



export default App
