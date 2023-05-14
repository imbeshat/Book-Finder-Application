import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../App.css";
import altCover from "../assets/default_book_cover_2015.jpg";

const BookDetails = ({ data }) => {
	return (
		<>
			<Popup
				trigger={
					<button>
						{" "}
						<h6 className="p-1 mt-1 bg-[#18092c] rounded-lg text-sm text-white">Click for more...</h6>{" "}
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
							<h6 className="text-sm text-left italic">Book Details</h6>
						</div>
						<div className="flex flex-col md:flex-row justify-start items-center gap-6">
							<div className="p-4">
								{data.volumeInfo && data.volumeInfo.imageLinks && data.volumeInfo.imageLinks.thumbnail ? (
									<img src={data.volumeInfo.imageLinks.thumbnail} alt="book-cover" className="rounded-2xl" width={128} height={201} />
								) : (
									<img src={altCover} alt="book-cover" className="rounded-2xl" width={128} height={201} />
								)}
							</div>
							<div className="content md:text-[14px] lg:text-[15px]">
								{""}
								<h1>Title: {data.volumeInfo.title}</h1>
								<h3>Author: {data.volumeInfo.authors[0]}</h3>
								<p>Language: {data.volumeInfo.language}</p>
								<p>Published Date: {data.volumeInfo.publishedDate}</p>
								<p>Average Rating: {data.volumeInfo.averageRating}</p>
								<p>Ratings Count: {data.volumeInfo.ratingsCount}</p>
								<p>Pages: {data.volumeInfo.pageCount}</p>
								<p>Maturity Rating: {data.volumeInfo.maturityRating}</p>
							</div>
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
