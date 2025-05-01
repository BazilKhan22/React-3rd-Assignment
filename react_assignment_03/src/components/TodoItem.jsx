export default function TodoItem({ todo, deleteTodo, setEditTodo }) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        border: '1px solid #ddd',
        margin: '5px 0',
        borderRadius: '4px'
      }}>
        <span>{todo.text}</span>
        <div>
          <button 
            onClick={() => setEditTodo(todo)}
            style={{ marginRight: '10px', padding: '5px 10px' }}
          >
            Edit
          </button>
          <button 
            onClick={() => deleteTodo(todo.id)}
            style={{ padding: '5px 10px', background: '#ff4444', color: 'white' }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }