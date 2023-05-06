import React from "react";

const BookItem = ({ data }) => {
	console.log(data);
	return (
		<>
			{!data
				? "Not Found"
				: data.map((item) => {
						return (
							<div key={item.id} className="w-auto rounded-2xl bg-slate-800 p-2">
								<img src={item.volumeInfo.imageLinks.thumbnail} alt="meal" className="rounded-2xl" />
								<h3 className="text-white text-lg">{item.volumeInfo.title}</h3>
							</div>
						);
				  })}
		</>
	);
};

export default BookItem;
