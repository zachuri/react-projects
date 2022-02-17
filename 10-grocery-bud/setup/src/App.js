import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
	const [name, setName] = useState('');
	const [list, setList] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [editID, setEditID] = useState(null);
	const [alert, setAlert] = useState({
		show: true,
		msg: '',
		type: '', // success or danger
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		// Condition to display ALert
		if (!name) {
			// display alert
			// setAlert({ show: true, msg: 'please enter value', type: 'danger' });
			showAlert(true, 'danger', 'please enter value');
		} else if (name && isEditing) {
			// deal with edit
		} else {
			// show alert
			showAlert(true, 'success', 'item added to the list');
			const newItem = { id: new Date().getTime().toString(), title: name };
			setList([...list, newItem]);
			setName('');
		}
	};

	const showAlert = (show = false, type = '', msg = '') => {
		setAlert({ show, type, msg });
	};

    const 

	return (
		<section className="section-center">
			<form className="grocery-form" onSubmit={handleSubmit}>
				{alert.show && <Alert {...alert} removeAlert={showAlert} />}
				<h3>grocery bud</h3>
				<div className="form-control">
					<input
						type="text"
						className="grocery"
						placeholder="e.g. eggs"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button type="submit" className="submit-btn">
						{isEditing ? 'edit' : 'sumbit'}
					</button>
				</div>
			</form>

			{/* if list length is greater than 0 show clear div*/}
			{list.length > 0 && (
				<div className="grocery-container">
					<List items={list} />
					<button className="clear-btn">clear items</button>
				</div>
			)}
		</section>
	);
}

export default App;
