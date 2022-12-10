import { useRouter } from "next/router";
import React, { useRef } from "react";
import ChatBot from "react-simple-chatbot";
import singleDayWithStay from "./steps/single-day-with-stay.json";
import bothDaysWithStay from "./steps/both-days-with-stay.json";
import singleDayWithoutStay from "./steps/single-day-without-stay.json";
import bothDaysWithoutStay from "./steps/both-days-without-stay.json";

type Props = {};

const Chatbot = (props: Props) => {
	const router = useRouter();
	console.log("router -->", router);

	// This is the default configuration if no query param is given since most people will be invited for a single day and without stay.
	let STEPS_TO_USE = singleDayWithoutStay.steps;

	if (router.query.d === "sd" && router.query.s === "y")
		// For people coming on just one day but require accomodation
		STEPS_TO_USE = singleDayWithStay.steps;
	if (router.query.d === "bd" && router.query.s === "y")
		// For people coming on both days and require accomodation
		STEPS_TO_USE = bothDaysWithStay.steps;
	if (router.query.d === "bd" && router.query.s === "n")
		// For people coming on both days and don't require accomodation
		STEPS_TO_USE = bothDaysWithoutStay.steps;

	return (
		<div className="my-4">
			{router.isReady && (
				<ChatBot
					hideHeader
					hideBotAvatar
					hideUserAvatar
					userDelay={0}
					placeholder="Type here..."
					style={{
						background: "#ffffff00",
						boxShadow: "0 12px 24px 0 rgb(0 0 0 / 0%)",
						fontFamily: "Manrope, sans-serif",
						height: "100%",
					}}
					steps={STEPS_TO_USE}
				/>
			)}
		</div>
	);
};

export default Chatbot;
