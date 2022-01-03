import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
	const [toggleBtn, setToggleBtn] = useState(false);

	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				<button
					className="btn"
					onClick={() => {
						setToggleBtn(!toggleBtn);
					}}
				>
					{toggleBtn ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			{toggleBtn && <p>{info}</p>}
		</article>
	);
};

export default Question;
