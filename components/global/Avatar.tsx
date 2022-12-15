import React from "react";

type Props = {
	height?: string;
	width?: string;
	hideOnlineIndicator?: boolean
};

function Avatar({height, width, hideOnlineIndicator}: Props) {
	return (
		<div className="flex -space-x-2 overflow-hidden mr-4 relative items-center flex-none">
			<img
				className={`inline-block ${height || "h-14"} ${width || "w-14"} rounded-full ring-2 ring-white`}
				src="/img/avatar.jpeg"
				alt="Sanjana and Arjun avatar"
			/>
			{!hideOnlineIndicator && <div className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-green-500" />}
		</div>
	);
}

export default Avatar;
