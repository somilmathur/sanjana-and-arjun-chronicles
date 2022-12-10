import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { useAppContext } from "../../context/app/appContext";
import DummyModal from "../dummy-modals/DummyModal";

type Props = {};

function Navbar({}: Props) {
	const [showProfileModal, setShowProfileModal] = useState(false);
	const { User } = useAppContext();
	return (
		<>
			<div className="h-20 w-full bg-white flex justify-between items-center rounded-b-3xl">
				<h3 className="text-2xl font-bold text-gray-900">
					Hey {User?.name || "there!"} 👋
				</h3>

				{/* Profile button   */}

				<button
					className="bg-gray-50 rounded-full px-2 py-2 flex items-center"
					onClick={() => setShowProfileModal(true)}
				>
					<FiUser className="text-gray-400 text-2xl" />
				</button>
			</div>
			<DummyModal
				message="This is just a Save The Date. You don't really need a profile page..."
				show={showProfileModal}
				setShow={setShowProfileModal}
			/>
		</>
	);
}

export default Navbar;
