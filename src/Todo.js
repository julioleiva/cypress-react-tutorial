import React from 'react';

export default function _Todo({ removeTodo, value, id }) {
  const deleteTodo = (id) => {
    removeTodo(id);
  };

  return (
    <div>
      {value}
      <button className='btn btn-danger' onClick={() => deleteTodo(id)}>
        X
      </button>
    </div>
  );
}
