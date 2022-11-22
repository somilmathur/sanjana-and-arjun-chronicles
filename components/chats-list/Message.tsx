import React from "react";

type Props = {
	time: string;
	numberOfUnreadMessages: number;
	from: string;
	message: string;
};

function Message({ from, message, time, numberOfUnreadMessages }: Props) {
	return (
		<div className="my-6 flex items-center justify-between">
			<div className="flex">
				{/* Avatar  */}
				<div className="flex -space-x-2 overflow-hidden mr-4 relative">
					<img
						className="inline-block h-14 w-14 rounded-full ring-2 ring-white"
						src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
					<div className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-green-500" />
				</div>

				{/* Message */}
				<div>
					<h6 className="font-bold text-gray-900 text-xl">{from}</h6>
					<span className="font-regular text-gray-500 text-xs">{message}</span>
				</div>
			</div>

			{/* Time and unread messages number */}

			<div className="flex flex-col justify-end items-center">
				<h6 className="text-gray-300 text-sm font-medium mb-2">{time}</h6>
				<div className="w-6 h-6 relative rounded-full bg-yellow-400">
					<span className="text-white text-center absolute top-0 bottom-0 left-0 right-0">
						{numberOfUnreadMessages}
					</span>
				</div>
			</div>
		</div>
	);
}

export default Message;
