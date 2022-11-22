import React from "react";
import { FiSearch } from "react-icons/fi";

type Props = {};

function Search({}: Props) {
	return (
		<div className="bg-gray-50 rounded-2xl p-4 flex">
			<FiSearch className="text-gray-400 text-xl mr-2" />
			<p className="text-gray-500 font-semibold">Search</p>
		</div>
	);
}

export default Search;
