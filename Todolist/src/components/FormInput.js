import React, { useState, useEffect, useRef } from 'react';

function FormInput(props) {
  const [input, setInput] = useState(props.change ? props.change.value : '');

  const inputRef = useRef(null);

// When the user submits the form (presses enter) the value in the input should be added as an item on your to do list. Use an uncontrolled form (useRef) for this. 

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='form-list'>
      {props.change ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='form-update change'
          />
          <button onClick={handleSubmit} className='form-update change'>
            Update
          </button>
        </>
      ) : (
        <div>
          <input
            placeholder='Add New Task'
            value={input}
            onChange={handleChange}
            name='text'
            className='form-update'
            ref={inputRef}
          />
          {/* When the user submits the form (presses enter) the value in the input should be added as an item on your to do list. Use  */}
          <button onClick={handleSubmit} className='add-value'>
            Add New List Item
          </button>
        </div>
      )}
    </form>
  );
}

export default FormInput;