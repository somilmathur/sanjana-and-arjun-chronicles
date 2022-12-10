import Link from "next/link";
import React, { useState } from "react";
import { FiPhoneCall, FiChevronLeft, FiVideo } from "react-icons/fi";
import CallModal from "../dummy-modals/CallModal";
import Avatar from "../global/Avatar";

type Props = {};

function ChatNavbar({}: Props) {
	const [showCallModal, setShowCallModal] = useState(false);
	return (
		<>
			<div className="h-24 w-full bg-white flex justify-between items-center rounded-b-3xl px-4 shadow-sm">
				<div className="flex items-center">
					{/* Back button */}
					<Link href="/">
						<FiChevronLeft className="text-gray-500 text-3xl mr-2" />
					</Link>
					<Avatar height="h-10" width="w-10" />
					<div>
						<p className="text-lg font-bold text-gray-900">Sanjana and Arjun</p>
						{/* <span className="font-normal text-xs text-green-500 -mb-2">Online</span> */}
					</div>
				</div>

				{/* Call and video call buttons   */}

				<div className="grid grid-cols-2 items-center gap-2">
					<button
						className="bg-gray-50 col-span-1 rounded-full px-2 py-2 flex items-center"
						onClick={() => setShowCallModal(true)}
					>
						<FiPhoneCall className="text-gray-400 text-xl" />
					</button>
					<button
						className="bg-gray-50 col-span-1 rounded-full px-2 py-2 flex items-center"
						onClick={() => setShowCallModal(true)}
					>
						<FiVideo className="text-gray-400 text-xl" />
					</button>
				</div>

				{/* Call Modal */}
				<CallModal show={showCallModal} setShow={setShowCallModal} />
			</div>
		</>
	);
}

export default ChatNavbar;
