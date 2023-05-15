import React from "react";
import altCover from "../assets/default_book_cover_2015.jpg";
import BookDetails from "./BookDetails";

const BookItem = ({ data }) => {
	return (
		<>
			{!data
				? "Not Found"
				: data.map((item) => {
						return (
							<div key={item.id} className="w-auto rounded-2xl bg-[#37264e] p-2 mb-4 flex flex-col justify-center items-center">
								{item.volumeInfo && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail ? (
									<img src={item.volumeInfo.imageLinks.thumbnail} alt="book-cover" className="rounded-2xl" width={128} height={201} />
								) : (
									<img src={altCover} alt="book-cover" className="rounded-2xl" width={128} height={201} />
								)}
								<h3 className="text-white text-lg mt-2 mb-2 text-center">{item.volumeInfo && item.volumeInfo.title}</h3>
								<BookDetails data={item} />
							</div>
						);
				  })}
		</>
	);
};

export default BookItem;
