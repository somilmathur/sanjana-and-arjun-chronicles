import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Avatar from "../global/Avatar";

type Props = {
	time: string;
	numberOfUnreadMessages: number;
	from: string;
	message: string;
};

function Message({ from, message, time, numberOfUnreadMessages }: Props) {
	const router = useRouter();
	return (
		<Link href={{ pathname: "/sanjana-and-arjun", query: router.query }}>
			<div className="my-6 flex items-center justify-between relative z-50 bg-white rounded-xl shadow-all-sides-white">
				<div className="flex">
					{/* Avatar  */}
					<Avatar />

					{/* Message */}
					<div className="flex flex-col">
						<h6 className="font-bold text-gray-900 text-xl">{from}</h6>
						<span className="font-regular text-gray-500 text-xs">
							{message}
						</span>
					</div>
				</div>

				{/* Time and unread messages number */}

				<div className="flex flex-col justify-end items-center">
					<h6 className="text-gray-300 text-sm font-medium mb-2">{time}</h6>
					<div className="w-6 h-6 relative rounded-full bg-primary">
						<span className="text-white text-center absolute top-0 bottom-0 left-0 right-0">
							{numberOfUnreadMessages}
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default Message;
