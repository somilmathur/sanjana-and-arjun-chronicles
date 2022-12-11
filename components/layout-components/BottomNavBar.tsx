import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FiMapPin, FiMessageCircle, FiPlus, FiEdit2 } from "react-icons/fi";
import { useAppContext } from "../../context/app/appContext";
import Avatar from "../global/Avatar";
import Button from "../global/buttons/Button";
import MotionDrawer from "../global/MotionDrawer";

type Props = {};

function BottomNavBar({}: Props) {
	const router = useRouter();
	const { UUID, Loading, SetLoading } = useAppContext();
	const [showSendMessageDrawer, setShowSendMessageDrawer] = useState(false);
	const activePage = router.pathname === "/" ? "home" : "location";
	const [message, setMessage] = useState("");
	const [ThankyouScreen, setThankyouScreen] = useState(false);

	const handleSendMessage = async () => {
		SetLoading(true);
		await fetch("/api/sendMessage", {
			method: "POST",
			body: JSON.stringify({
				message,
				UUID,
			}),
		});
		SetLoading(false);
		setThankyouScreen(true)
	};

	return (
		<div className="h-20 w-full bg-white px-10 items-center fixed bottom-0 flex justify-around items-center shadow-custom-card rounded-t-3xl">
			<Link href={{ pathname: "/", query: router.query }}>
				<FiMessageCircle
					className={`text-3xl text-${
						activePage === "home" ? "primary" : "gray-300"
					}`}
				/>
			</Link>
			<div className="bg-primary w-16 h-16 -mt-16 rounded-full flex justify-center items-center shadow-custom-card">
				<FiEdit2
					className="text-3xl text-white text-center"
					onClick={() => setShowSendMessageDrawer(true)}
				/>
			</div>
			<Link href={{ pathname: "/location", query: router.query }}>
				<FiMapPin
					className={`text-3xl text-${
						activePage === "location" ? "primary" : "gray-300"
					}`}
				/>
			</Link>

			{/* Send message to couple modal/drawer  */}
			<MotionDrawer
				show={showSendMessageDrawer}
				setShow={setShowSendMessageDrawer}
			>
				<div className="py-10 px-4">
					{/* Message screen  */}
					{!ThankyouScreen && (
						<div>
							{/* To box */}
							<div className="bg-gray-50 my-6 rounded-xl p-4 my-2 flex items-center">
								<span className="text-sm font-bold text-gray-400">
									To:{" "}
									<span className="text-gray-700 mr-2">Sanjana and Arjun</span>
								</span>
								<Avatar height="h-8 w-8" hideOnlineIndicator />
							</div>

							{/* Text editor  */}
							<div className="my-4">
								<textarea
									id="message"
									rows={4}
									className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-xl focus:ring-gray-300 focus:border-blue-500"
									placeholder="Send us a message to let us know how excited you are!"
									onChange={(message) => setMessage(message.target.value)}
								/>
							</div>

							{/* Submit button */}
							<Button
								appearance="Primary"
								loading={Loading}
								onClick={() => handleSendMessage()}
							>
								Send message
							</Button>
						</div>
					)}

					{ThankyouScreen && (
						<div>
							<p className="text-gray-900 font-bold text-center text-2xl text-center">
								✌️
							</p>
							<p className="text-gray-900 font-bold text-center text-md text-center mt-4">
								Thanks for your message! Hope to see you very soon!
							</p>
						</div>
					)}
				</div>
			</MotionDrawer>
		</div>
	);
}

export default BottomNavBar;
