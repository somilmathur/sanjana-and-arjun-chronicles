import React from "react";
import { FiMapPin, FiMessageCircle, FiPlus, FiEdit2 } from "react-icons/fi";

type Props = {};

function BottomNavBar({}: Props) {
	return (
		<div className="h-20 w-full px-10 items-center fixed bottom-0 flex justify-around items-center shadow-custom-card rounded-t-3xl">
			<FiMessageCircle className="text-3xl text-primary" />
			<div className="bg-primary w-16 h-16 -mt-16 rounded-full flex justify-center items-center shadow-custom-card">
				<FiEdit2 className="text-3xl text-white text-center" />
			</div>
			<FiMapPin className="text-3xl text-gray-300" />
		</div>
	);
}

export default BottomNavBar;
