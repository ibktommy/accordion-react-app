import React, { useState } from "react";
import "./Questions.css";

const Questions = ({ title, info }) => {
	// Setting State
	const [show, setShow] = useState(false);

	function open() {
		setShow(!show);
	}
	return (
		<>
			<div className="card center">
				<div className="card-question center">
					<h2 className="question-title">{title}</h2>
					<i
						className={show ? "fa-solid fa-plus" : "fa-solid fa-minus"}
						onClick={open}
					></i>
				</div>

				{show ? null : <div className="answer">{info}</div>}
			</div>
		</>
	);
};

export default Questions;
