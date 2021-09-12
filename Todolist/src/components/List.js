import React, { useState } from 'react';
import FormInput from './FormInput';


const List = ({ lists, finishList, removeList, updateList }) => {
  const [change, setChange] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateList(change.id, value);
    setChange({
      id: null,
      value: ''
    });
  };

  if (change.id) {
    return <FormInput change={change} onSubmit={submitUpdate} />;
  }

  return lists.map((list, index) => (
    <div
      className={list.nowFinish? 'list-row finish' : 'list-row'}
      key={index}
    >
      <div key={list.id} onClick={() => finishList(list.id)}>
        {list.text}

      </div>

    {/* Add a remove button for each item that when clicked removes the item from the list  */}
      <button
          onClick={() => removeList(list.id)}
          className='delete-icon'>delete</button>
        <button
          onClick={() => setChange({ id: list.id, value: list.text })}
          className='change-icon'>change</button>
        
      </div>
   
  ));
};

export default List;