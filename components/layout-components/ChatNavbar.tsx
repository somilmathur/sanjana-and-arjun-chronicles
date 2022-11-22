import React from "react";
import { FiPhoneCall, FiUser, FiVideo } from "react-icons/fi";
import Avatar from "../global/Avatar";

type Props = {};

function ChatNavbar({}: Props) {
	return (
		<>
			<div className="h-20 w-full bg-white flex justify-between items-center rounded-b-3xl">
				<div className="flex items-center">
					<Avatar />
					<h3 className="text-lg font-bold text-gray-900">
						Sanjana and Arjun
					</h3>
				</div>

				{/* Call and video call buttons   */}

				<div className="grid grid-cols-2 items-center gap-2">
					<button className="bg-gray-50 col-span-1 rounded-full px-2 py-2 flex items-center">
						<FiPhoneCall className="text-gray-400 text-2xl" />
					</button>
                    <button className="bg-gray-50 col-span-1 rounded-full px-2 py-2 flex items-center">
						<FiVideo className="text-gray-400 text-2xl" />
					</button>
				</div>
			</div>
		</>
	);
}

export default ChatNavbar;
