import React, { useRef } from "react";
import ChatBot from "react-simple-chatbot";
import singleDayWithStay from "./steps/single-day-with-stay.json"

type Props = {};

const Chatbot = (props: Props) => {	
	return (
		<div className="my-4">
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
				steps={singleDayWithStay.steps}
			/>
		</div>
	);
};

export default Chatbot;
