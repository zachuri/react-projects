import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
	const [questions, setQuestion] = useState(data);
	console.log(questions);

	return (
		<main>
			<div className="container">
				<h3>Questions and Answers About Login</h3>
				<section className="info">
					{questions.map((question) => {
						{
							/* ...question is to pass all the props */
						}
						return <SingleQuestion key={question.id} {...question} />;
					})}
				</section>
			</div>
		</main>
	);
}

export default App;
