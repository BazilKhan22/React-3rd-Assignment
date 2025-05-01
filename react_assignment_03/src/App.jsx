import { useState } from 'react';
import TodoForm from './components/TodoApp/TodoForm';
import TodoList from './components/TodoApp/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  // Add new todo
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    if (currentTodo?.id === id) setCurrentTodo(null);
  };

  // Update todo
  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
    setCurrentTodo(null);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Todo App</h1>
      <TodoForm 
        addTodo={addTodo}
        editTodo={editTodo}
        currentTodo={currentTodo}
      />
      <TodoList 
        todos={todos}
        deleteTodo={deleteTodo}
        setEditTodo={setCurrentTodo}
      />
    </div>
  );
}