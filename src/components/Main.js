import React from "react";
import Search from "./Search";
import "../App.css";

const Main = () => {
	return (
		<div className="main-content flex flex-col justify-center items-center text-white">
			<h1 className="text-5xl md:text-6xl lg:text-7xl text-center py-4">Find Your Book</h1>
			<p className="w-[80%] md:w-[600px]">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis velit debitis quod ipsam accusamus voluptatum iusto aspernatur fuga suscipit
				officiis rerum corrupti, dolorum hic sequi eius iste eum molestias, ipsum error soluta maiores perferendis sed mollitia amet. Illum impedit
				unde possimus deleniti delectus consequuntur, doloremque minima fugiat recusandae beatae id corrupti distinctio quidem quis ipsa assumenda
				culpa, esse, sit omnis! Eius veniam nulla sit iusto magnam repudiandae tempora, sequi illo, eos, qui blanditiis! Temporibus cum ad harum
				officia similique, non animi modi ipsa inventore sint quam illo earum totam, voluptas facilis, quasi soluta neque alias aliquam voluptate ex
				praesentium nemo.
			</p>
			<Search />
		</div>
	);
};

export default Main;
