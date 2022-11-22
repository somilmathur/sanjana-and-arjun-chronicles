import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Message from "../components/chats-list/Message";
import BaseLayout from "../layouts/BaseLayout";

const Home: NextPage = () => {
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
				<BaseLayout>
					<Message
						time="12:36"
						numberOfUnreadMessages={2}
						from="Sanjana and Arjun"
						message="Are you free on 16th February, 2023?"
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
