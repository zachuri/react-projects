import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
	let list = localStorage.getItem('list');

	if (list) {
		return JSON.parse(localStorage.getItem('list'));
	} else {
		return [];
	}
};

function App() {
	const [name, setName] = useState('');
	const [list, setList] = useState(getLocalStorage());
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
			setList(
				list.map((item) => {
					if (item.id === editID) {
						return { ...item, title: name };
					}
					return item;
				})
			);

			setName('');
			setEditID(null);
			setIsEditing(false);
			showAlert(true, 'success', 'value changed');
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

	const clearList = () => {
		showAlert(true, 'danger', 'empty list');
		setList([]);
	};

	const removeItem = (id) => {
		showAlert(true, 'danger', 'item removed');
		setList(list.filter((item) => item.id !== id));
	};

	const editItem = (id) => {
		const specificItem = list.find((item) => item.id === id);
		setIsEditing(true);
		setEditID(id);
		setName(specificItem.title);
	};

	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(list));
	}, [list]);

	return (
		<section className="section-center">
			<form className="grocery-form" onSubmit={handleSubmit}>
				{alert.show && (
					<Alert {...alert} removeAlert={showAlert} list={list} />
				)}
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
					<List items={list} removeItem={removeItem} editItem={editItem} />
					<button className="clear-btn" onClick={clearList}>
						clear items
					</button>
				</div>
			)}
		</section>
	);
}

export default App;
