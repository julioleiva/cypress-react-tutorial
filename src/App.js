import React, { useState } from 'react';
import Todo from './Todo';

let todoCounter = 1;

export default function _App() {
  const [list, setList] = useState([
    {
      id: 1,
      value: 'Do nothing',
    },
    {
      id: 2,
      value: 'Learn Cypress',
    },
  ]);

  const [item, setItem] = useState('');

  const handleInputChange = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item_ = {
      id: todoCounter++,
      value: item.slice(),
    };
    setList(list.concat(item_));
    setItem('');
  };

  const handleRemove = (id) => {
    setList(list.filter((element) => element.id !== id));
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <h2>Add Todo</h2>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-md-6'>
            <input
              type='text'
              autoFocus
              value={item}
              onChange={handleInputChange}
              placeholder='Enter a task'
              className='form-control'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <button type='submit' className='btn btn-primary'>
              Add Task
            </button>
          </div>
        </div>
      </form>
      <div className='row todo-list'>
        <div className='col-md-6'>
          <h3>Lists</h3>
          {!list.length ? (
            <div className='no-task'>No task!</div>
          ) : (
            <ul>
              {list.map((item) => {
                return (
                  <li key={item.id}>
                    <Todo {...item} removeTodo={handleRemove} />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
