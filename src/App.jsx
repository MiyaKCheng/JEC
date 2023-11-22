import { useState } from 'react'
import './App.css'

function TodoList() {
  const Todolist = [
    { id: 1, text: 'JSの勉強をする', completed: false },
    { id: 2, text: 'Reactの復習をする', completed: false },
    { id: 3, text: '買い物に行く', completed: false },
  ];

  const [todos, setTodos] = useState(Todolist);
  const [newText, newTask] = useState('');

  const reset = () => {
    setTodos(Todolist);
  };

  const addTask = () => {
    if (newText.trim() !== '') {
      const newTask = {
        id: todos.length + 1,
        text: newText,
        completed: false,
      };
      setTodos([...todos, newTask]);
      newTask('');
    }
  };

  const btn = (taskId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === taskId) {
          return Object.assign({}, todo, { completed: !todo.completed });
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => btn(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>

      <button onClick={addTask}>Add Task</button>
      <input
        type="text"
        value={newText}
        onChange={(e) => newTask(e.target.value)}
      />
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default TodoList;
