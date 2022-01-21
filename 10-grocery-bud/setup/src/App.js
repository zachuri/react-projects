import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
	const [name, setName] = useState('');
	const [list, setList] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [editId, setEditId] = useState(null);

	// This is to pass in an object
	const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
	const handleSubmit = (e) => {
		e.preventDefault(); //prevent form from refreshing
		console.log('hello');
	};

	return (
		<section className="section-center">
			<form className="grocery-form" onSubmit={handleSubmit}>
				{alert.show && <Alert />}
				<h3>grocery bud</h3>
				<div className="form-control">
					<input
						type="text"
						className="grocery"
						placeholder="e.g egggs"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button type="submit" className="submit-btn">
						{isEditing ? 'edit' : 'submit'}
					</button>
				</div>
			</form>

			<div className="grocery-container">
				<List />
				<button className="clear-btn">clear items</button>
			</div>
		</section>
	);
}

export default App;
