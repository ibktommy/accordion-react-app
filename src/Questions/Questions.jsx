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
						className={show ? "fa-solid fa-minus" : "fa-solid fa-plus"}
						onClick={open}
					></i>
				</div>

				{show ? <div className="answer">{info}</div> : null}
			</div>
		</>
	);
};

export default Questions;
