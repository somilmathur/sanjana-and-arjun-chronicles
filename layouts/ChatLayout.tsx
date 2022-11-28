import React from "react";
import ChatNavbar from "../components/layout-components/ChatNavbar";

type Props = any;

function ChatLayout({ children }: Props) {
	return (
		<div className="mx-auto">
			<ChatNavbar />
			<div className="mx-auto px-4">
				{/* <hr className="w-10/12 opacity-50" /> */}
				{children}
			</div>
		</div>
	);
}

export default ChatLayout;
