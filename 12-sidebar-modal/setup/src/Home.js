import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext, useGlobalContext } from './context';

const Home = () => {
	// const data = useContext(AppContext);
	const data = useGlobalContext();
	console.log(data);
	return (
		<main>
			<button className="sidebar-toggle">
				<FaBars />
			</button>
			<button className="btn">show modal</button>
		</main>
	);
};

export default Home;
