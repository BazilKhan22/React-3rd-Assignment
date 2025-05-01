import { useState } from 'react';

export default function TodoForm({ addTodo, editTodo, currentTodo }) {
  const [text, setText] = useState(currentTodo?.text || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    if (currentTodo) {
      editTodo(currentTodo.id, text);
    } else {
      addTodo(text);
    }
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
        style={{ padding: '8px', width: '70%', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '8px 15px' }}>
        {currentTodo ? 'Update' : 'Add'} Todo
      </button>
    </form>
  );
}