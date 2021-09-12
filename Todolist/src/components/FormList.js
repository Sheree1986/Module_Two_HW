
import React, { useState } from 'react';
import FormInput from './FormInput';
import List from './List';

function FormList() {
const [lists, setLists] = useState([]);
//  When the page loads, your app should render a list of items from an array of data 

  const addList = list => {
    if (!list.text || /^\s*$/.test(list.text)) {

  // https://stackoverflow.com/questions/154059/how-can-i-check-for-an-empty-undefined-null-string-in-javascript to prevent empty vaules 
      return;
    }
  // Your app should have an input that allows the user to enter a new item 

    const newLists = [list, ...lists];

    setLists(newLists);
    console.log(...lists);
  };

  const updateList = (listId, newIndex) => {
    if (!newIndex.text || /^\s*$/.test(newIndex.text)) {
      return;
    }

    setLists(last => last.map(item => (item.id === listId ?newIndex: item)));
  };

 
  const removeList= id => {
  const removedItem = [...lists].filter(list => list.id !== id);

    setLists(removedItem);
  };

  const finishList = id => {
    let updatedList = lists.map(list => {
      if (list.id === id) {
        list.nowFinish = !list.nowFinish;
      }
      return list;
    });
    setLists(updatedList);
  };

  return (
    
    <div>

      <h1>Errand List...sorry no free time today Buddy!</h1>
      <FormInput onSubmit={addList} />
      <List
        lists={lists}
        finishList={finishList}
        removeList={removeList}
        updateList={updateList} />
   </div>
);
}

export default FormList;