import React, { useState } from "react";
import { FiMapPin, FiMessageCircle, FiPlus, FiEdit2 } from "react-icons/fi";
import Avatar from "../global/Avatar";
import Button from "../global/buttons/Button";
import MotionDrawer from "../global/MotionDrawer";

type Props = {};

function BottomNavBar({}: Props) {
	const [showSendMessageDrawer, setShowSendMessageDrawer] = useState(false);
	return (
		<div className="h-20 w-full px-10 items-center fixed bottom-0 flex justify-around items-center shadow-custom-card rounded-t-3xl">
			<FiMessageCircle className="text-3xl text-primary" />
			<div className="bg-primary w-16 h-16 -mt-16 rounded-full flex justify-center items-center shadow-custom-card">
				<FiEdit2
					className="text-3xl text-white text-center"
					onClick={() => setShowSendMessageDrawer(true)}
				/>
			</div>
			<FiMapPin className="text-3xl text-gray-300" />

			{/* Send message to couple modal/drawer  */}
			<MotionDrawer
				show={showSendMessageDrawer}
				setShow={setShowSendMessageDrawer}
			>
				<div className="py-10 px-4">

					{/* To box */}
					<div className="bg-gray-50 my-6 rounded-xl p-4 my-2 flex items-center">
						<span className="text-sm font-bold text-gray-400">
							To: <span className="text-gray-700 mr-2">Sanjana and Arjun</span>
						</span>
						<Avatar height="h-8 w-8" hideOnlineIndicator />
					</div>

					{/* Text editor  */}
					<div className="my-4">					
						<textarea
							id="message"
							rows={4}
							className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-xl focus:ring-gray-300 focus:border-blue-500"
							placeholder="Send a message to the happy couple..."
						/>
					</div>

					{/* Submit button */}
					<Button appearance="Primary">Send message</Button>
				</div>
			</MotionDrawer>
		</div>
	);
}

export default BottomNavBar;
