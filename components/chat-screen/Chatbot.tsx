import { useRouter } from "next/router";
import React from "react";
import ChatBot from "react-simple-chatbot";
import { singleDayWithStay } from "./steps/single-day-with-stay";
import { bothDaysWithStay } from "./steps/both-days-with-stay";
import { singleDayWithoutStay } from "./steps/single-day-without-stay";
import { bothDaysWithoutStay } from "./steps/both-days-without-stay";
import { useAppContext, AppContextInterface } from '../../context/app/appContext';

type Props = {};

const Chatbot = (props: Props) => {
	const router = useRouter();
	const { UUID, Loading } : AppContextInterface = useAppContext();
	console.log("UUID -->", UUID)
	// This is the default configuration if no query param is given since most people will be invited for a single day and without stay.
	let STEPS_TO_USE: any = singleDayWithoutStay.steps;

	if (router.query.d === "sd" && router.query.s === "y")
		// For people coming on just one day but require accomodation
		STEPS_TO_USE = singleDayWithStay.steps;
	if (router.query.d === "bd" && router.query.s === "y")
		// For people coming on both days and require accomodation
		STEPS_TO_USE = bothDaysWithStay.steps;
	if (router.query.d === "bd" && router.query.s === "n")
		// For people coming on both days and don't require accomodation
		STEPS_TO_USE = bothDaysWithoutStay(UUID);

	const handleEnd = ({ renderedSteps, steps, values }) => {
		console.log("renderedSteps -->", renderedSteps);
		console.log("steps -->", steps);
		console.log("values -->", values);
	};

	return (
		<div className="my-4">
			{router.isReady && (
				<ChatBot
					hideHeader
					hideBotAvatar
					hideUserAvatar
					userDelay={0}
					handleEnd={handleEnd}
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
