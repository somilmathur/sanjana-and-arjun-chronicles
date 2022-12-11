import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Message from "../components/chats-list/Message";
import BaseLayout from "../layouts/BaseLayout";

const Home = () => {
	const router = useRouter()
	let message = "Are you free on 16th February, 2023?" // Default message
	if(router.query.d === "bd") message = "Are you free on 15th and 16th February, 2023?" // If inviting for both days, we'll change the message

	return (
		<>
			<Head>
				<meta
					name="description"
					key="description"
					content="Woohoo! Sanjana and Arjun are getting married! Join us in our celebration and let's party together on 16th February, 2023!"
				/>
			</Head>
			<div className="h-screen bg z-20">				
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
			</div>
		</>
	);
};

export default Home;
