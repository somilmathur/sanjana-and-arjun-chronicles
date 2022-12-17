import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ClickHere from "../components/chats-list/ClickHere";
import Message from "../components/chats-list/Message";
import BaseLayout from "../layouts/BaseLayout";

const Home = () => {
	const [showClickHereIndication, setShowClickHereIndication] = useState(true);

	// To check whether we need to show the click here indication.
	useEffect(() => {
		const checkLocalStorageForKey = localStorage.getItem(
			"clickHereIndicationShown"
		);
		console.log("checkLocalStorageForKey --> ", checkLocalStorageForKey);
		if (checkLocalStorageForKey) setShowClickHereIndication(false);
	}, []);

	const router = useRouter();

	let message =
		"A celebration hard to miss is coming your way! Are you free on 16th February, 2023?"; // Default message
	if (router.query.d === "bd")
		message =
			"A celebration hard to miss is coming your way! Are you free on 15th and 16th Feb, 2023?"; // If inviting for both days, we'll change the message

	return (
		<>
			<Head>
				<meta
					name="description"
					key="description"
					content="Woohoo! Sanjana and Arjun are getting married! Join us in our celebration and let's party together on 16th February, 2023!"
				/>
			</Head>
			<div className="h-screen bg z-20 relative overflow-hidden bg-no-repeat bg-cover">
				<BaseLayout>
					<Message
						time="12:36"
						numberOfUnreadMessages={2}
						from="Sanjana and Arjun"
						message={message}
					/>

					{/* No more messages right now  */}
					<div className="text-center">
						<hr className="px-4 opacity-50" />
						<span className="my-4 text-xxs text-center w-full text-gray-300 font-light">
							No more messages to show
						</span>
					</div>
				</BaseLayout>

				{/* Click here indication (Will only show up once using localStorage) */}
				{showClickHereIndication && (
					<>
						<ClickHere />
						<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-5" />
					</>
				)}
			</div>
		</>
	);
};

export default Home;
