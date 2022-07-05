import React, { useState } from "react";
// import data from "../data";
import "./Questions.css";

const Questions = () => {
	// Setting State
	const [show, setShow] = useState(false);

	function open() {
		setShow(!show);
	}
	return (
		<>
			<div className="card center">
				<div className="card-question center">
					<h2 className="question-title">
						Do i have to allow the use of cookies?
					</h2>
					<i
						className={show ? "fa-solid fa-plus" : "fa-solid fa-minus"}
						onClick={open}
					></i>
				</div>

				{show ? null : (
					<div className="answer">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
						molestias obcaecati dolores nam in error!
					</div>
				)}
			</div>
		</>
	);
};

export default Questions;
