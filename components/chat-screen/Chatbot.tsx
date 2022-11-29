import React, { useRef } from "react";
import ChatBot from "react-simple-chatbot";

type Props = {};

const Chatbot = (props: Props) => {
	const chatbotRef = useRef()
	console.log("chatbotRef", chatbotRef)
	return (
		<div className="my-4">
			<ChatBot
				hideHeader
				ref={chatbotRef}
				hideBotAvatar
				hideUserAvatar	
				placeholder="Type here..."			
				style={{
					background: "#ffffff00",
					boxShadow: "0 12px 24px 0 rgb(0 0 0 / 0%)",
					fontFamily: "Manrope, sans-serif",
					height: "100%",
				}}
				steps={[
					{
						id: "are-you-free",
						message: "Are you free on 16th February, 2023?",
						trigger: "are-you-free-answer",
					},
					{
						id: "are-you-free-answer",
						options: [
							{ value: "yes", label: "Yes!  🎉", trigger: "do-you-love-cake" },
							{ value: "no", label: "No  😔", trigger: "can-you-cancel" },
						],
					},
					{
						id: "can-you-cancel",
						message: "Can you cancel your plans?",
						trigger: "can-you-cancel-answer",
					},
					{
						id: "can-you-cancel-answer",
						options: [
							{
								value: "yes",
								label: "Anything for you guys! 🥹",
								trigger: "do-you-love-cake",
							},
							{ value: "no", label: "No!  😞", trigger: "please" },
						],
					},
					{
						id: "please",
						message: "Please? We promise it will be a great time!",
						trigger: "please-answer",
					},
					{
						id: "please-answer",
						options: [
							{
								value: "yes",
								label: "Alright then!  🫡",
								trigger: "positive-end",
							},
							{
								value: "no",
								label: "Still a no.  😞",
								trigger: "negative-end",
							},
						],
					},
					{
						id: "positive-end",
						message:
							"Awesome! Sanjana and Arjun are getting married on 16th February, 2023!",
						trigger: "rsvp",
					},
					{
						id: "rsvp",
						message: "Let me RSVP you in. What's your name?",
						trigger: "how-many-people",
					},
					{
						id: "how-many-people",
						message: "How many people in your party will be joining?",
						trigger: "accomodation",
					},
					{
						id: "how-many-people-answer",
						options: [
							{
								value: "1",
								label: "Just me",
								trigger: "accomodation",
							},
							{
								value: "2",
								label: "2",
								trigger: "accomodation",
							},
							{
								value: "3",
								label: "3",
								trigger: "accomodation",
							},
							{
								value: "4",
								label: "4",
								trigger: "accomodation",
							},
							{
								value: "4+",
								label: "4+",
								trigger: "accomodation",
							},
						],
					},
					{
						id: "accomodation",
						message: "Would you be requiring accomodation?",
						trigger: "accomodation-answer",
					},
					{
						id: "accomodation-answer",
						options: [
							{
								value: "yes",
								label: "Yes, please!",
								trigger: "positive-end",
							},
							{
								value: "no",
								label: "No, I'll manage.",
								trigger: "negative-end",
							},
						],
					},
					{
						id: "do-you-love-cake",
						message: "Do you love cake?",
						end: true
						// trigger: "are-you-busy-answer",
					},
					{
						id: "negative-end",
						message:
							"Bummer! We'll miss you at the event. However, you can check back here to see live photos of the event at any time! Cheers. ✌️",
						trigger: "rsvp",
					},
				]}
			/>
		</div>
	);
};

export default Chatbot;
