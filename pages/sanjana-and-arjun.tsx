import React from "react";
import Head from "next/head";
import ChatLayout from "../layouts/ChatLayout";

type Props = {};

function SanjanaAndArjun({}: Props) {
	return (
		<>
			<Head>
				<meta
					name="description"
					key="description"
					content="Find the best real estate investments that will bring immense profit in the future. Here are the real estate opportunities that are safe & hassle-free."
				/>
			</Head>
			<div className="bg-white h-screen">
				<ChatLayout></ChatLayout>
			</div>
		</>
	);
}

export default SanjanaAndArjun;
