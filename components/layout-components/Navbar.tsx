import React from "react";
import { FiUser } from "react-icons/fi";

type Props = {};

function Navbar({}: Props) {
	return (
		<>
			<div className="h-20 w-full bg-white flex justify-between items-center rounded-b-3xl">
				<h3 className="text-2xl font-bold text-gray-900">Hey there! 👋</h3>

				{/* Profile button   */}

				<button className="bg-gray-50 rounded-full px-2 py-2 flex items-center">
					<FiUser className="text-gray-400 text-2xl" />
				</button>
			</div>
		</>
	);
}

export default Navbar;
