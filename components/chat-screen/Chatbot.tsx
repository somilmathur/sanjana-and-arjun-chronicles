import React from "react";
import ChatBot from "react-simple-chatbot";

type Props = {};

const Chatbot = (props: Props) => {
	return (
		<div className="my-4">
			<ChatBot
				hideHeader
				hideBotAvatar
				hideUserAvatar				
				footerStyle={{
					visibility: "hidden",
				}}				
				style={{
					background: "#ffffff00",
					boxShadow: "0 12px 24px 0 rgb(0 0 0 / 0%)",
					fontFamily: "Manrope, sans-serif",
					height: "100%"
				}}
				steps={[
					{
						id: "are-you-busy",
						message: "Are you busy on 16th February, 2023?",
						trigger: "are-you-busy-answer",
					},
					{
						id: "are-you-busy-answer",
						options: [
							{ value: "yes", label: "Yes  😔", trigger: "can-you-cancel" },
							{ value: "no", label: "No!  🎉", trigger: "do-you-love-cake" },
						],
					},
					{
						id: "can-you-cancel",
						message: "Can you cancel?",
						end: true
					},
					{
						id: "do-you-love-cake",
						message: "Do you love cake?",
						trigger: "are-you-busy-answer"
					},
				]}
			/>
		</div>
	);
};

export default Chatbot;
