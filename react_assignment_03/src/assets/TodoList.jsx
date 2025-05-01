import TodoItem from '../components/TodoItem';

export default function TodoList({ todos, deleteTodo, setEditTodo }) {
  return (
    <div>
      {todos.length === 0 ? (
        <p>No todos yet. Add one above!</p>
      ) : (
        todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo}
            deleteTodo={deleteTodo}
            setEditTodo={setEditTodo}
          />
        ))
      )}
    </div>
  );
}