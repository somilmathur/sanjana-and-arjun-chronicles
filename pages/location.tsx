import type { NextPage } from "next";
import Head from "next/head";
import BaseLayout from "../layouts/BaseLayout";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Location = () => {	

	return (
		<>
			<Head>
				<meta
					name="description"
					key="description"
					content="Woohoo! We are getting married! Join us in our celebration and let's party together on 16th February, 2023!"
				/>
			</Head>
			<div className="bg-white h-screen">				
				<BaseLayout>
                        <div className="h-screen flex flex-col justify-start items-center">	

                        <Player
					autoplay
                    loop
					src="./location.json"
					style={{ height: "300px", width: "300px" }}
				>
					<Controls visible={false} />
				</Player>				
                        <p className="text-xl font-bold text-center text-gray-900">Stay tuned to find out where you have to show up for the rager!</p>
                        <p className="text-sm font-normal text-center text-gray-500 mt-4">Hint: it's gonna be somewhere in Delhi so you can start looking up your flight tickets. 🤘</p>
                        </div>
				</BaseLayout>
			</div>
		</>
	);
};

export default Location;
