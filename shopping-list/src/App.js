// Deliverables
// Build a grocery app that allows users to make a grocery list

// Technical Requirements
// The groceries array in your state must have grocery items that look like this:

// state = {

//     groceries: [ ]

// }

// {
//   item: '',
//   units: '',
//   quantity: 0,
//   isPurchased: false
// }
// Make an array of 3 objects using the above shape and render the item, quantity and units (12 pack, 1lb, 2 liters, etc.)
// Make inputs so that new items can be added
// Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)
// Add some style to your app
import React, { useState} from 'react';
import './index.css';


const App = () => {
	// put item in state. when state is updated the item renders
	// a boolean 
	const [items, setItems] = useState([
		{ item: 'Apples',units: '', quantity: 0, isPurchased: false },
		{ item: 'Bananas',units: '', quantity: 0, isPurchased: true },
		{ item: 'Grapes',units: '', quantity: 0, isPurchased: false },

	]);


	const [inputValue, setInputValue] = useState('');
	const [inputUnit, setInputUnit] = useState('');
	const [totalItemCount, setTotalItemCount] = useState();
	

	const handleClick = () => {
		const itemAdd = {
			item: inputValue,
      		units: inputUnit,
			quantity: 0,
			isPurchased: false,
		};
		
		const newAdd= [...items, itemAdd];
    // Creates a new object called newAdd which is what gets pushed to the array.
		setItems(newAdd);
		setInputValue('');
		setInputUnit('');
		// calculateUnit('');
		calculateTotal('');
	};

	

	const handleAdd = (index) => {
		const newAdd = [...items];

	
		items[index].quantity++;

		setItems(newAdd);
		calculateTotal();
	};

	const handleSub= (index) => {
		const newAdd= [...items];

		newAdd[index].quantity--;
    // uses maps function to increase or decrease quantity

		setItems(newAdd);
		calculateTotal();
	};

	const toggleComplete = (index) => {
		const newAdd= [...items];

		newAdd[index].isPurchased = !newAdd[index].isPurchased;

		setItems(newAdd);
	};

	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			return total + item.quantity;
		 }, 0); // starting value is 0
// reduce functions is similar to maps function takes all the values from an array and combine it to one output. 
		setTotalItemCount(totalItemCount);
	};


	
		

	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
          {/* onChange passes the function and react automatically passes the event. in this case add an item input value. event.target.value update set event */}
					<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input1' placeholder='Add an item to Grocery List' required />
					<button onClick={() => handleClick()}>+</button>
				
				
				</div>
				<div className='add-item-box'>
    
					<input value={inputUnit} onChange={(event) => setInputUnit(event.target.value)} className='add-item-input' placeholder='Add Unit' />
					{/* <button onClick={() => handleClick()}>+</button> */}
				
		
				</div>
				
				{/* <div className='add-item-box'>
        			
				<select
              id='units'
              value={inputUnit} 
			//   onClick={(event) => console.log(event.target.value)}
		onChange={(event) => setInputUnit(event.target.value)}
			
            >
              <option>Select Unit</option>
              <option>liters</option>
              <option>pack </option>
              <option>lb </option>
              <option>bunches </option>
            </select>
				</div>
	 */}

          {/* onChange passes the function and react automatically passes the event. in this case add an item input value. event.target.value update set event */}
					
			
				<div className='item-list'>
					{items.map((item, index) => (
            // map function gives us the current object it is currently on as a variable so we can access its properties.
						<div className='item-container'>
							<div className='item-name' onClick={() => toggleComplete(index)}>
								{item.isPurchased ? (
									<>

                    
										<span className='completed'>{item.item}</span>
									</>
								) : (
									<>
										
										<span>{item.item}</span>
									</>
								)}
								
							</div>
							
							<div className='quantity'>
							
							
								<button onClick={() => handleSub(index)}>-
								</button>
								<span> {item.quantity} </span>
								<button onClick={() => handleAdd(index)}>+
								</button>
								
							</div>
							
						</div>
						
					))}
				</div>						
				

				<div className='total'>Total: {totalItemCount} {inputUnit}</div> 
    {/* displays the total count to user. */}
	

			</div>
		</div>
	);
};

export default App;