import React from "react";
import { FiPhoneCall, FiUser, FiVideo } from "react-icons/fi";
import Avatar from "../global/Avatar";

type Props = {};

function ChatNavbar({}: Props) {
	return (
		<>
			<div className="h-24 w-full bg-white flex justify-between items-center rounded-b-3xl px-4 shadow-sm">
				<div className="flex items-center">
					<Avatar />
					<div>
						<p className="text-lg font-bold text-gray-900">
							Sanjana and Arjun
						</p>
						{/* <span className="font-normal text-xs text-green-500 -mb-2">Online</span> */}
					</div>
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
