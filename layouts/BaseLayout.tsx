import React from "react";
import BottomNavBar from "../components/layout-components/BottomNavBar";
import Search from "../components/chats-list/Search";
import Navbar from "../components/layout-components/Navbar";

type Props = any;

function BaseLayout({ children }: Props) {
	return (
		<div className="mx-auto">
			<div className="mx-auto px-4">
				<Navbar />
				<Search />
				<hr className="w-10/12 opacity-50 mt-4" />
				{children}
			</div>
			<BottomNavBar />
		</div>
	);
}

export default BaseLayout;
