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
							<div className="content lg:text-[15px]">
								{""}
								<h1 className="flex flex-row">
									<span className="pr-1">Title:</span>
									{data.volumeInfo && data.volumeInfo.title ? <p>{data.volumeInfo.title}</p> : <p>N/A</p>}
								</h1>
								<h3 className="flex flex-row">
									<span className="pr-1">Author:</span>
									{data.volumeInfo && data.volumeInfo.authors && data.volumeInfo.authors.length > 0 ? (
										<p>{data.volumeInfo.authors[0]}</p>
									) : (
										<p>N/A</p>
									)}
								</h3>
								<h3 className="flex flex-row">
									<span className="pr-1">Language:</span>
									{data.volumeInfo && data.volumeInfo.language ? <p>{data.volumeInfo.language}</p> : <p>N/A</p>}
								</h3>
								<h3 className="flex flex-row">
									<span className="pr-1">Published Date:</span>
									{data.volumeInfo && data.volumeInfo.publishedDate ? <p>{data.volumeInfo.publishedDate}</p> : <p>N/A</p>}
								</h3>
								<h3 className="flex flex-row">
									<span className="pr-1">Average Rating:</span>
									{data.volumeInfo && data.volumeInfo.averageRating ? <p>{data.volumeInfo.averageRating}</p> : <p>N/A</p>}
								</h3>
								<h3 className="flex flex-row">
									<span className="pr-1">Ratings Count:</span>
									{data.volumeInfo && data.volumeInfo.ratingsCount ? <p>{data.volumeInfo.ratingsCount}</p> : <p>N/A</p>}
								</h3>
								<h3 className="flex flex-row">
									<span className="pr-1">Pages:</span>
									{data.volumeInfo && data.volumeInfo.pageCount ? <p>{data.volumeInfo.pageCount}</p> : <p>N/A</p>}
								</h3>
								<h3 className="flex flex-row">
									<span className="pr-1">Maturity Rating:</span>
									{data.volumeInfo && data.volumeInfo.maturityRating ? <p>{data.volumeInfo.maturityRating}</p> : <p>N/A</p>}
								</h3>
							</div>
						</div>
						<div className="description md:text-[14px] lg:text-[15px] p-4">
							<h1 className="mb-2 mt-2 text-center">Description</h1>
							{data.volumeInfo && data.volumeInfo.description ? <p>{data.volumeInfo.description}</p> : <p>Not Available</p>}
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
