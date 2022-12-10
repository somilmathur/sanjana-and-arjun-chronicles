import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import DummyModal from "../dummy-modals/DummyModal";

type Props = {};

function Search({}: Props) {
	const [showSearchModal, setShowSearchModal] = useState(false);
	return (
		<>
			<div
				className="bg-gray-50 rounded-2xl p-4 flex"
				onClick={() => setShowSearchModal(true)}
			>
				<FiSearch className="text-gray-400 text-xl mr-2" />
				<p className="text-gray-500 font-semibold">Search</p>
			</div>
			<DummyModal
				message="What are you even gonna search for in a Save The Date?"
				show={showSearchModal}
				setShow={setShowSearchModal}
			/>
		</>
	);
}

export default Search;
