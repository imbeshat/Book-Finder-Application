import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../App.css";

const BookDetails = ({ data }) => {
	return (
		<>
			<Popup
				trigger={
					<button className="button">
						{" "}
						<h6 className="p-1 mt-1 bg-black rounded-lg text-sm">Click for more...</h6>{" "}
					</button>
				}
				modal
				nested
			>
				{(close) => (
					<div className="modal">
						<button className="close" onClick={close}>
							&times;
						</button>
						<div className="header">
							<h1>{data.strMeal}</h1>
							<h6 className="text-sm text-left italic">{data.strArea} Food</h6>
						</div>
						<div className="content">
							{""}
							{data.strInstructions}
						</div>
						<div className="actions">
							<button
								className="m-1 p-1 border-2 border-stone-800 rounded"
								onClick={() => {
									close();
								}}
							>
								Close
							</button>
						</div>
					</div>
				)}
			</Popup>
		</>
	);
};

export default BookDetails;
