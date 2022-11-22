import React from "react";

type Props = {};

function Avatar({}: Props) {
	return (
		<div className="flex -space-x-2 overflow-hidden mr-4 relative">
			<img
				className="inline-block h-14 w-14 rounded-full ring-2 ring-white"
				src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				alt=""
			/>
			<div className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-green-500" />
		</div>
	);
}

export default Avatar;
