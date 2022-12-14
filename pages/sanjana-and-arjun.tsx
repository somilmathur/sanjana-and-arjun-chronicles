import React from "react";
import Head from "next/head";
import ChatLayout from "../layouts/ChatLayout";
import Chatbot from "../components/chat-screen/Chatbot";
import { useEffect } from 'react';

type Props = {};

function SanjanaAndArjun({}: Props) {
	useEffect(() => {
	  localStorage.setItem("clickHereIndicationShown", "true")
	}, [])
	
	return (
		<>
			<Head>
				<meta
					name="description"
					key="description"
					content="Woohoo! Sanjana and Arjun are getting married! Join us in our celebration and let's party together on 16th February, 2023!"
				/>
			</Head>
			<div className="bg-gray-50 h-screen">
				<ChatLayout>
					<Chatbot />
				</ChatLayout>
			</div>
		</>
	);
}

export default SanjanaAndArjun;
